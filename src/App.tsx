import { Route, Routes } from "react-router-dom"
import App01 from './01-SplitScreen/App'
import App02 from './02-lists/App'
import App03 from "./03-modals/App03"

function App() {
  return (
    <Routes>
      <Route path="/" element={<App01 />} />
      <Route path="/02" element={<App02 />} />
      <Route path="/03" element={<App03 />} />
    </Routes>
  )
}

export default App
