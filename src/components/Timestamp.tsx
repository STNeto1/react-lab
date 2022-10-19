import { useEffect, useState } from 'react'

export default function Timestamp() {
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

  if (loading) {
    return <p className="text-2xl">Loading...</p>
  }

  return (
    <div>
      <p className="text-2xl">Timestamp: {timestamp}</p>
    </div>
  )
}
