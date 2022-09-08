import React, { ReactElement, ReactNode, useState } from 'react'

interface IProps {
  children: ReactNode
  onFinish?: () => void
}

interface IStep {
  goToNext: () => void
}

export default function UncontrolledOnboardingFlow({ children }: IProps) {
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToNext = () => {
    setCurrentIndex(currentIndex + 1)
  }
  
  const currentChild = React.Children.toArray(children)[currentIndex] as ReactElement<IStep>

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  } 

  return <>{ currentChild }</>
}
