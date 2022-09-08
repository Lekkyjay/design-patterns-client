import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Person } from '../data'

export default function useResource(resourceUrl: string) {
  const [resource, setResource] = useState<Person | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(resourceUrl) as Person
      setResource(data)
    }
    fetchData()
  }, [resourceUrl])
  
  return resource
}
