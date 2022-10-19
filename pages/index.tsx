import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import Counter from '../src/components/Counter'

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <main className="container mt-5 flex items-center justify-center h-screen">
        <Counter />
      </main>
    </Provider>
  )
}

export default Home
