import React, { ReactElement, ReactNode, useEffect, useState } from 'react'

type goToNextArgType = {
  [n: string]: unknown
}

interface IStep {
  goToNext: (x: goToNextArgType) => void
}

interface IProps {
  children: ReactNode
  onFinish?: ({}) => void
  currentIndex: number
  onNext: (arg: goToNextArgType) => void
  setChildrenLength: React.Dispatch<React.SetStateAction<number>>
}

export default function ControlledOnboardingFlow({ children, onFinish, currentIndex, onNext, setChildrenLength }: IProps) {
  const goToNext = (stepData: goToNextArgType) => {
    onNext(stepData)
  }
  
  useEffect(() => {
    setChildrenLength(React.Children.toArray(children).length)
  }, [])
  
  const currentChild = React.Children.toArray(children)[currentIndex] as ReactElement<IStep>

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  } 

  return <>{ currentChild }</>
}
