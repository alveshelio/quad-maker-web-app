import React, { useEffect, createContext, useContext, useState } from 'react'
import { auth } from '../lib/auth/nhostAuth'

interface AuthProviderProps {
  children: React.ReactNode
}

interface GlobalState {
  isAuthenticated: boolean | null
}

const initialState: GlobalState = {
  isAuthenticated: null,
}

const GlobalStateContext = createContext<GlobalState>(initialState)

export default function GlobalContextProvider({
  children,
}: AuthProviderProps): React.ReactNode {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((data: boolean) => {
      console.warn('data in onAuthStatechanged', data)
      setIsAuthenticated(data)
    })
  }, [])

  return (
    <GlobalStateContext.Provider value={{ isAuthenticated }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export function useGlobalState(): GlobalState {
  return useContext(GlobalStateContext)
}
