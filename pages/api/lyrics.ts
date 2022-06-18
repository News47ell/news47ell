import type { NextApiRequest, NextApiResponse } from 'next'
import { getLyrics } from '@/lib/supabase'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lyrics } = await getLyrics()

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json(lyrics)
}
