'use client'
import React,{ useContext } from 'react'
import { PackagesContext } from '../context/PackagesContext'

export default function usePackagesContext() {
  const { packagesRef } = useContext<any>(PackagesContext);
  return packagesRef;
}
