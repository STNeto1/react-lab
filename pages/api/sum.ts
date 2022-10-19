import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas POST' })
  }
  const body = req.body
  const a = typeof body.a === 'number' ? body.a : 0
  const b = typeof body.b === 'number' ? body.b : 0

  res.status(200).json({ sum: a + b })
}
