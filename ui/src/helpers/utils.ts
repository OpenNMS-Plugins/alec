import { format } from 'date-fns'
import CONST from '@/helpers/constants'
import { TAlarm, TSituation } from '@/types/TSituation'
import { isToday, isYesterday, isThisWeek } from 'date-fns'

const formatDate = (date: Date | string | number | undefined) => {
	let formattedDate = ''
	if (date) {
		try {
			formattedDate = format(new Date(date), CONST.DATE_FORMAT)
		} catch (e) {
			console.log('error date', date)
		}
	}
	return formattedDate
}

// OpenNMS returns situation descriptions with embedded HTML markup (e.g.
// `<p>ALEC Diagnostic: ...</p>` injected by ApiMapper). The REST/Vue
// pipeline can deliver it either as raw tags or as HTML-entity-encoded
// markup (`&lt;p&gt;...&lt;/p&gt;`). When we then drop the encoded form
// into v-html, the browser decodes the entities but the resulting `<p>`
// characters show as literal text, not paragraphs. Decoding first restores
// real tags so v-html renders properly (situation detail) and stripping
// works (card truncation).
const decodeHtmlEntities = (text: string): string =>
	text
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")

const truncateText = (text: string, length: number) => {
	const stripped = decodeHtmlEntities(text)
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim()
	const end = stripped.length > length ? '...' : ''
	return stripped.substring(0, length) + end
}

const filterListByDate = (
	selectedTimePeriod: number,
	list: (TAlarm | TSituation)[]
) => {
	let filtered = list
	switch (selectedTimePeriod) {
		case 2:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isToday(a.firstEventTime)
			)
			break
		case 3:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isYesterday(a.firstEventTime)
			)
			break
		case 4:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isThisWeek(a.firstEventTime)
			)
			break
	}
	return filtered
}
export { formatDate, truncateText, decodeHtmlEntities, filterListByDate }
