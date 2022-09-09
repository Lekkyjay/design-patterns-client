import React from 'react'
import UserInfo from '../07-customHooks/01-UserInfo'
import { printProps } from './PrintProps'

//UserInfoWrapped === the fn returned by printProps
//the fn returned by printProps does 3 things:
//1, it receives the props of UserInfoWrapped   { a, b, c }
//2, it injects those props into any Component passed in: UserInfo 
//3, it returns UserInfo with its original props + injected props
const UserInfoWrapped = printProps(UserInfo)

export default function App09() {
  return (
    <UserInfoWrapped a={1} b={"Hello"} c={{ name: "shaun" }} />
  )
}
