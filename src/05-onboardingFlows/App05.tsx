import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow'

type goToNextArgType = {
  [n: string]: unknown
}

interface IStep {
  goToNext?: (x: goToNextArgType) => void
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
    <button onClick={()=>goToNext?.({hairColor: 'brown'})}>Next</button>
  </>
)

export default function App05() {
  return (
    <UncontrolledOnboardingFlow onFinish={data => {
      console.log('data: ', data)
      alert('Onboarding completed')
    }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  )
}
