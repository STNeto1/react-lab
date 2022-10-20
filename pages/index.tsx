import type { NextPage } from 'next'
import Sum from '../src/components/Sum'

const Home: NextPage = () => {
  return (
    <main className="container mt-5 flex items-center justify-center h-screen">
      <Sum />
    </main>
  )
}

export default Home
