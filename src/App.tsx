import SplitScreen from './components/SplitScreen'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <Left name='sidebar' />
      <Right message='Hello' />
    </SplitScreen>
  )
}

export default App
