import { Route, Routes } from "react-router-dom"
import App01 from './01-SplitScreen/App'
import App02 from './02-lists/App'

function App() {
  return (
    <Routes>
      <Route path="/" element={<App01 />} />
      <Route path="/02" element={<App02 />} />
    </Routes>
  )
}

export default App
