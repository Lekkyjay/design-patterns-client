import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Person } from '../data'

interface IProp {
  getResource: () => any
}

export default function useDataSource(getResource: () => any) {
  const [resource, setResource] = useState<Person | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResource()
      setResource(data)
    }
    fetchData()
  }, [getResource])
  
  return resource
}
