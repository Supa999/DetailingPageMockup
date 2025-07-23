'use client'
import React,{ createContext, useRef } from 'react'

type ContactContextType = {
  contactRef: React.RefObject<any>;
}

export const ContactContext = createContext<ContactContextType>({
  contactRef: {current: null},
});

export default function ContextProvider({children}: {children: React.ReactNode}) {
  const contactRef = useRef<HTMLElement>(null);
  return (
    <ContactContext.Provider value={{contactRef}}>
      {children}
    </ContactContext.Provider>
  )
}
