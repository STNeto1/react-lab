import { useEffect, useState } from 'react'

export default function useTimestamp() {
  const [timestamp, setTimestamp] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/timestamp')
      .then((res) => res.json())
      .then((data) => {
        setTimestamp(data.timestamp)
        setLoading(false)
      })
  }, [])

  return { timestamp, loading }
}
