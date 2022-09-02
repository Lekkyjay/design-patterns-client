import Left from "./Left"
import Right from "./Right"
import SplitScreen from "./SplitScreen"


function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <Left name='sidebar' />
      <Right message='Hello' />
    </SplitScreen>
  )
}

export default App
