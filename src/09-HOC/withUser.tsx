import axios from "axios"
import { ComponentType, useEffect, useState } from "react"
import { Person } from "../data"

type withUserProps = {
  userId: number
}

export default function withUser<T>(Component: ComponentType<T & withUserProps>, { userId }: withUserProps) {
  return (hocProps: T & withUserProps) => {
    const [user, setUser] = useState<Person | null>(null)

    useEffect(() => {
      (async () => {
        const res = await axios.get(`/users/${userId}`)
        setUser(res.data)
      })()
    })

    return <Component {...hocProps } user={user} />
  }
}
