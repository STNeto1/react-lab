import { useContext } from 'react'
import { GenericContext } from '../context/Generic'

export default function Counter() {
  const { count, increment, decrement } = useContext(GenericContext)

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
      >
        -
      </button>
      <p className="text-2xl">{count}</p>
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
      >
        +
      </button>
    </div>
  )
}
