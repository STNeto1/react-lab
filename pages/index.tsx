import type { NextPage } from 'next'
import Counter from '../src/components/Counter'

const Home: NextPage = () => {
  return (
    <main className="container mt-5 flex items-center justify-center h-screen">
      <Counter />
    </main>
  )
}

export default Home
