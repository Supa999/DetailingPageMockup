'use client'
import React, { createContext, useRef } from 'react'

  type PackagesContextType = {
    packagesRef: React.RefObject<any>;
  }

  export const PackagesContext = createContext<PackagesContextType>({
    packagesRef: {current: null},
  })

export default function PackagesContextProvider({children} : {children: React.ReactNode}) {
  const packagesRef = useRef<HTMLElement>(null);
  return (
    <PackagesContext.Provider value={{packagesRef}}>
      {children}
    </PackagesContext.Provider>
  )
}
