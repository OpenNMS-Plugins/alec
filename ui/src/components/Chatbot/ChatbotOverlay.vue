<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const question = ref('')
const isLoading = ref(false)
const messageList = ref<HTMLElement | null>(null)
const messages = reactive<Message[]>([
  {
    role: 'assistant',
    content:
      "Hi! I'm the ALEC Assistant. I can answer questions about your OpenNMS environment — alarms, nodes, situations, and what's happening right now. What would you like to know?"
  }
])

const toggle = () => { isOpen.value = !isOpen.value }

const getPageContext = (): string => {
  const href = window.location.href
  const nodeDetail = href.match(/\/node\/detail\/(\d+)/)
  if (nodeDetail) return `Viewing node detail page for node ID ${nodeDetail[1]}`
  const alarm = href.match(/\/alarm\/detail\/(\d+)/)
  if (alarm) return `Viewing alarm detail for alarm ID ${alarm[1]}`
  const situations = href.match(/#\/situations/)
  if (situations) return 'Viewing the Situations list'
  const alarms = href.match(/#\/alarms/)
  if (alarms) return 'Viewing the Alarms list'
  const topology = href.match(/topology/)
  if (topology) return 'Viewing the Topology map'
  const pluginAlec = href.match(/plugins\/alec/)
  if (pluginAlec) return 'Viewing the ALEC plugin configuration page'
  return `Current URL: ${href}`
}

const scrollToBottom = async () => {
  await nextTick()
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight
  }
}

const send = async () => {
  const q = question.value.trim()
  if (!q || isLoading.value) return
  question.value = ''
  messages.push({ role: 'user', content: q })
  isLoading.value = true
  await scrollToBottom()

  try {
    const resp = await fetch('/opennms/rest/alec/llm/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ question: q, pageContext: getPageContext() })
    })
    if (resp.status === 503) {
      messages.push({
        role: 'assistant',
        content:
          'LLM is not configured. Please set up the LLM integration under **Plugins → ALEC → LLM Setup**.'
      })
    } else if (!resp.ok) {
      messages.push({ role: 'assistant', content: `Error ${resp.status} — please try again.` })
    } else {
      const data = await resp.json()
      messages.push({ role: 'assistant', content: data.answer ?? '(empty response)' })
    }
  } catch {
    messages.push({ role: 'assistant', content: 'Network error — please try again.' })
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    send()
  }
}
</script>

<template>
  <div class="alec-chatbot">
    <!-- Floating toggle button -->
    <button
      class="alec-chatbot__fab"
      :class="{ 'alec-chatbot__fab--open': isOpen }"
      :aria-label="isOpen ? 'Close ALEC Assistant' : 'Open ALEC Assistant'"
      @click="toggle"
    >
      <svg v-if="!isOpen" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>

    <!-- Chat panel -->
    <transition name="alec-slide">
      <div v-if="isOpen" class="alec-chatbot__panel" role="dialog" aria-label="ALEC Assistant">
        <div class="alec-chatbot__header">
          <span class="alec-chatbot__title">ALEC Assistant</span>
          <button class="alec-chatbot__close" aria-label="Close" @click="toggle">✕</button>
        </div>

        <div class="alec-chatbot__messages" ref="messageList">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="alec-chatbot__message"
            :class="`alec-chatbot__message--${msg.role}`"
          >
            <span class="alec-chatbot__bubble" v-html="msg.content.replace(/\n/g, '<br>')" />
          </div>
          <div v-if="isLoading" class="alec-chatbot__message alec-chatbot__message--assistant">
            <span class="alec-chatbot__bubble alec-chatbot__bubble--loading">
              <span class="alec-chatbot__dot" />
              <span class="alec-chatbot__dot" />
              <span class="alec-chatbot__dot" />
            </span>
          </div>
        </div>

        <div class="alec-chatbot__input-row">
          <textarea
            v-model="question"
            class="alec-chatbot__input"
            placeholder="Ask about nodes, alarms, situations…"
            rows="2"
            :disabled="isLoading"
            @keydown="onKeydown"
          />
          <button
            class="alec-chatbot__send"
            :disabled="isLoading || !question.trim()"
            aria-label="Send"
            @click="send"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.alec-chatbot {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  font-family: system-ui, -apple-system, sans-serif;
}

/* FAB */
.alec-chatbot__fab {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #0e6bcd;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: background 0.2s, transform 0.15s;
}
.alec-chatbot__fab:hover { background: #0958ad; transform: scale(1.06); }
.alec-chatbot__fab--open { background: #444; }

/* Panel */
.alec-chatbot__panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 340px;
  max-height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.alec-chatbot__header {
  background: #0e6bcd;
  color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.95rem;
}
.alec-chatbot__close {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 4px;
  opacity: 0.8;
}
.alec-chatbot__close:hover { opacity: 1; }

.alec-chatbot__messages {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.alec-chatbot__message { display: flex; }
.alec-chatbot__message--user { justify-content: flex-end; }
.alec-chatbot__message--assistant { justify-content: flex-start; }

.alec-chatbot__bubble {
  max-width: 82%;
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  line-height: 1.45;
  word-break: break-word;
}
.alec-chatbot__message--user .alec-chatbot__bubble {
  background: #0e6bcd;
  color: #fff;
  border-bottom-right-radius: 4px;
}
.alec-chatbot__message--assistant .alec-chatbot__bubble {
  background: #f0f2f5;
  color: #1a1a1a;
  border-bottom-left-radius: 4px;
}

/* Typing dots */
.alec-chatbot__bubble--loading {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
}
.alec-chatbot__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #888;
  animation: alec-bounce 1.2s infinite ease-in-out;
}
.alec-chatbot__dot:nth-child(2) { animation-delay: 0.2s; }
.alec-chatbot__dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes alec-bounce {
  0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

/* Input row */
.alec-chatbot__input-row {
  display: flex;
  align-items: flex-end;
  padding: 10px 12px;
  border-top: 1px solid #e8e8e8;
  gap: 8px;
}
.alec-chatbot__input {
  flex: 1;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.875rem;
  resize: none;
  outline: none;
  font-family: inherit;
  transition: border-color 0.15s;
}
.alec-chatbot__input:focus { border-color: #0e6bcd; }
.alec-chatbot__input:disabled { background: #f5f5f5; }

.alec-chatbot__send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0e6bcd;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
}
.alec-chatbot__send:hover:not(:disabled) { background: #0958ad; }
.alec-chatbot__send:disabled { background: #b0c4de; cursor: not-allowed; }

/* Slide transition */
.alec-slide-enter-active,
.alec-slide-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.alec-slide-enter-from,
.alec-slide-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}
</style>
