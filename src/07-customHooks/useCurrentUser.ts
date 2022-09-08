import React, { useEffect, useState } from 'react'
import { people, Person } from '../data'

export default function useCurrentUser() {
  const [user, setUser] = useState<Person | null>(null)  

  useEffect(() => {
    setUser(people[0])
  }, [])
  
  return (
    user
  )
}
