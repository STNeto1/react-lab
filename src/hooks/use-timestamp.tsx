import { useEffect, useState } from 'react'

export default function useTimestamp() {
  const [timestamp, setTimestamp] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/timestamp')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
          return
        }

        setTimestamp(data.timestamp)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { timestamp, loading, error }
}
