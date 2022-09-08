import { Route, Routes } from "react-router-dom"
import App01 from './01-SplitScreen/App'
import App02 from './02-lists/App'
import App03 from "./03-modals/App03"
import App03Controlled from "./03-modals/App03Controlled"
import App04 from "./04-forms/App04"
import App05 from "./05-onboardingFlows/App05"

function App() {
  return (
    <Routes>
      <Route path="/" element={<App01 />} />
      <Route path="/02" element={<App02 />} />
      <Route path="/03" element={<App03 />} />
      <Route path="/03c" element={<App03Controlled />} />
      <Route path="/04" element={<App04 />} />
      <Route path="/05" element={<App05 />} />
    </Routes>
  )
}

export default App
