'use client'
import { useContext } from 'react'
import { PackagesContext } from '../context/PackagesContext'

export default function usePackagesContext() {
  const { packagesRef } = useContext(PackagesContext);
  return packagesRef;
}
