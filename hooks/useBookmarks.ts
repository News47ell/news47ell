import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { Bookmark } from '@/lib/types'

export function useBookmarks(): Bookmark {
	const { data, error } = useSWR<Bookmark>('/api/bookmarks', fetcher)

	const bookmarks = data?.bookmarks || []
	const tags = data?.tags || []
	const isLoading = !error && !data
	const isError = error

	return {
		bookmarks,
		tags,
		isLoading,
		isError,
	}
}
