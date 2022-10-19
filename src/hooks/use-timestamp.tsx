import { useQuery } from '@tanstack/react-query'

type Data = {
  timestamp: number
}

export default function useTimestamp() {
  return useQuery<unknown, Error, Data>(
    ['timestamp'],
    async () => {
      const res = await fetch('http://localhost:3000/api/timestamp')

      if (!res.ok) {
        throw new Error('Failed to fetch timestamp')
      }

      return res.json()
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true
    }
  )
}
