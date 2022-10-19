import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(400).json({
    error: 'Algum erro'
  })

  // res.status(200).json({ timestamp: Date.now() })
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
