import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice'
import { RootState } from '../app/store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
      >
        -
      </button>
      <p className="text-2xl">{count}</p>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
      >
        +
      </button>
    </div>
  )
}
