import React from 'react'
import UserInfo from './UserInfo'
import UserInfo2 from './UserInfo2'

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
