import type { NextPage } from 'next'
import { Suspense } from 'react'
import Timestamp from '../src/components/Timestamp'

const Home: NextPage = () => {
  return (
    <main className="container mt-5 flex items-center justify-center h-screen">
      <Suspense fallback={<p className="text-2xl">Loading...</p>}>
        <Timestamp />
      </Suspense>
    </main>
  )
}

export default Home
