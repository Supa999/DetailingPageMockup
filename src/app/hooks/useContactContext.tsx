'use client'
import {useContext} from 'react'
import  {ContactContext}  from '../context/Context';

export default function useContactContext() {
  const { contactRef } = useContext(ContactContext);
  
  return contactRef;
}
