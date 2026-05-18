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

const truncateText = (text: string, length: number) => {
	// OpenNMS returns situation descriptions with embedded HTML markup
	// (e.g. `<p>ALEC Diagnostic: ...</p>` injected by ApiMapper), and the
	// REST/Vue pipeline can deliver it either as raw tags or as HTML-entity-
	// encoded markup (`&lt;p&gt;...&lt;/p&gt;`). In the truncated list view
	// we don't render HTML, so strip both forms before measuring length so
	// the tags don't show up as literal text.
	const decoded = text
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
	const stripped = decoded.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
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
export { formatDate, truncateText, filterListByDate }
