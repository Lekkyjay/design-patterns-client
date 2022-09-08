import React, { useEffect, useState } from 'react'
import { people, Person } from '../data'

export default function useUser(userId: number) {
  const [user, setUser] = useState<Person | null>(null)  

  useEffect(() => {
    setUser(people[userId])
  }, [])
  
  return (
    user
  )
}
