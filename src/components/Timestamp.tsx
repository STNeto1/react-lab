import useTimestamp from '../hooks/use-timestamp'

export default function Timestamp() {
  const { loading, timestamp, error } = useTimestamp()

  if (loading) {
    return <p className="text-2xl">Loading...</p>
  }

  if (error) {
    return <p className="text-2xl text-red-600">Error: {error}</p>
  }

  return (
    <div>
      <p className="text-2xl">Timestamp: {timestamp}</p>
    </div>
  )
}
