import useTimestamp from '../hooks/use-timestamp'

export default function Timestamp() {
  const { data, isLoading, isError, error } = useTimestamp()

  if (isLoading) {
    return <p className="text-2xl">Loading...</p>
  }

  if (isError) {
    return <p className="text-2xl text-red-600">Error: {error.message}</p>
  }

  return (
    <div>
      <p className="text-2xl">Timestamp: {data?.timestamp}</p>
    </div>
  )
}
