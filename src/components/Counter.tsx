import { useCounter } from '../lib/counter'

export default function Counter() {
  const { count, inc, dec } = useCounter()

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={dec}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
      >
        -
      </button>
      <p className="text-2xl">{count}</p>
      <button
        onClick={inc}
        className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
      >
        +
      </button>
    </div>
  )
}
