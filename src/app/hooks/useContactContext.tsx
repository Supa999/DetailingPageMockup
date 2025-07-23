'use client'
import React, {useContext} from 'react'
import  {ContactContext}  from '../context/Context';

export default function useContactContext() {
  const { contactRef } = useContext<any>(ContactContext);
  
  return contactRef;
}
