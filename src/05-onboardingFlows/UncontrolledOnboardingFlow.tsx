import React, { ReactElement, ReactNode, useState } from 'react'

interface IProps {
  children: ReactNode
  onFinish?: ({}) => void
}

type goToNextArgType = {
  [n: string]: unknown
}

interface IStep {
  goToNext: (x: goToNextArgType) => void
}

export default function UncontrolledOnboardingFlow({ children, onFinish }: IProps) {
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToNext = (stepData: goToNextArgType) => {
    const nextIndex = currentIndex + 1

    const updatedData = { ...onboardingData, ...stepData }

    console.log('updatedData: ', updatedData)
    
    if (nextIndex < React.Children.toArray(children).length) {
      setCurrentIndex(nextIndex)
    } else {
      onFinish?.(updatedData)
    }

    setOnboardingData(updatedData)
  }
  
  const currentChild = React.Children.toArray(children)[currentIndex] as ReactElement<IStep>

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  } 

  return <>{ currentChild }</>
}
