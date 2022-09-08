import { useState } from 'react'
import ControlledOnboardingFlow from './ControlledOnboardingFlow'


type onNextArgType = {
  [n: string]: unknown
}

interface IStep {
  goToNext?: (x: onNextArgType) => void
}

const StepOne = ({goToNext}: IStep) => (
  <>
    <h1>Step 1</h1>
    <button onClick={()=>goToNext?.({name: 'John Doe'})}>Next</button>
  </>
)

const StepTwo = ({goToNext}: IStep) => (
  <>
    <h1>Step 2</h1>
    <button onClick={()=>goToNext?.({age: 100})}>Next</button>
  </>
)

const StepThree = ({goToNext}: IStep) => (
  <>
    <h1>Step 3</h1>
    <h2>Congratulations! you qualified for our senior discount.</h2>
    <button onClick={()=>goToNext?.({})}>Next</button>
  </>
)

const StepFour = ({goToNext}: IStep) => (
  <>
    <h1>Step 4</h1>    
    <button onClick={()=>goToNext?.({hairColor: 'brown'})}>Next</button>
  </>
)

//improvement: after the last child has been loaded, redirect to a custom "onBoarding Completed" finish page
export default function App06() {
  const [onboardingData, setOnboardingData] = useState<{age?: number}>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [childrenLength, setChildrenLength] = useState(0)
  
  const onNext = (stepData: onNextArgType) => {
    const nextIndex = currentIndex + 1

    if (nextIndex < childrenLength + 1 ) {
      setCurrentIndex(nextIndex)
    } else {
      setCurrentIndex(0)
      alert('Onboarding Completed!')
    }
    setOnboardingData({ ...onboardingData, ...stepData })
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <ControlledOnboardingFlow onNext={(arg:onNextArgType)=>onNext(arg)} currentIndex={currentIndex} setChildrenLength={setChildrenLength} >
      <StepOne />
      <StepTwo />
      {onboardingData.age! >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  )
}
