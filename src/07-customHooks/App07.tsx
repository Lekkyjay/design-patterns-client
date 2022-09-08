import React from 'react'
import UserInfo from './01-UserInfo'
import UserInfo2 from './02-UserInfo'

export default function App07() {
  return (
    <>
      <UserInfo />
      <br /><hr />
      <UserInfo2 userId={1}/>
      <br /><hr />
      <UserInfo2 userId={2}/>
    </>
  )
}
