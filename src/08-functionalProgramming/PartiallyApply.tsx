import React, { ReactNode } from 'react'
import { Button } from './ComponentComposition'

interface IPP {  
  [x:string]: any
}

export default function PartiallyApply(Component: React.ElementType, { ...partialProps }: IPP) {
  return ({ ...props }: IPP) => (
    <Component { ...partialProps } { ...props } />
  )
}

export const DangerButtonPA = PartiallyApply(Button, { color: 'red' })
export const BigSuccessButtonPA = PartiallyApply(Button, { color: 'green', size: 'large' })
