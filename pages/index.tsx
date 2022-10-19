import type { NextPage } from 'next'
import Timestamp from '../src/components/Timestamp'

const Home: NextPage = () => {
  return (
    <main className="container mt-5 flex items-center justify-center h-screen">
      <Timestamp />
    </main>
  )
}

export default Home
