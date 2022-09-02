import SplitScreen from './components/SplitScreen'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
    <SplitScreen Left={Left} leftWeight={1} Right={Right} rightWeight={3} />
  )
}

export default App
