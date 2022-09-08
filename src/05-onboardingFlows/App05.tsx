import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow'

interface IStep {
  goToNext?: () => void
}

const StepOne = ({goToNext}: IStep) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
  </>
)

const StepTwo = ({goToNext}: IStep) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
  </>
)

const StepThree = ({goToNext}: IStep) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
)

export default function App05() {
  return (
    <UncontrolledOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  )
}
