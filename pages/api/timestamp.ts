import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sleep(1000)

  res.status(200).json({ timestamp: Date.now() })
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
