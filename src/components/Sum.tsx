import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function Sum() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const { data } = useQuery(
    ['sum', a.toString(), b.toString()],
    () => {
      console.log('will sum', a, b)
      return a + b
    },
    {
      staleTime: Infinity
    }
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <button
          className="bg-red-700 px-2  text-white rounded text-lg"
          onClick={() => setA((v) => v - 1)}
        >
          -
        </button>
        <span className="text-lg">{a}</span>
        <button
          className="bg-green-700 px-2  text-white rounded text-lg"
          onClick={() => setA((v) => v + 1)}
        >
          +
        </button>
      </div>

      <div className="text-center text-lg">{data}</div>

      <div className="flex items-center gap-4">
        <button
          className="bg-red-700 px-2  text-white rounded text-lg"
          onClick={() => setB((v) => v - 1)}
        >
          -
        </button>
        <span className="text-lg">{b}</span>
        <button
          className="bg-green-700 px-2  text-white rounded text-lg"
          onClick={() => setB((v) => v + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}
