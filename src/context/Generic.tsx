import { createContext, ReactNode, useState } from 'react'

type GenericContextType = {
  count: number
  increment: () => void
  decrement: () => void
}

export const GenericContext = createContext({} as GenericContextType)

type GenericProviderProviderProps = {
  children: ReactNode
}

export function GenericProvider({ children }: GenericProviderProviderProps) {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)

  return (
    <GenericContext.Provider value={{ count, increment, decrement }}>
      {children}
    </GenericContext.Provider>
  )
}
