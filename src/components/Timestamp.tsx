import useTimestamp from '../hooks/use-timestamp'

export default function Timestamp() {
  const { loading, timestamp } = useTimestamp()

  if (loading) {
    return <p className="text-2xl">Loading...</p>
  }

  return (
    <div>
      <p className="text-2xl">Timestamp: {timestamp}</p>
    </div>
  )
}
