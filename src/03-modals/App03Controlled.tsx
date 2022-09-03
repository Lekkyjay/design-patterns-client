import React, { useState } from 'react'
import ControlledModal from './ControlledModal'

export default function App03Controlled() {
  const [shouldShow, setShouldShow] = useState(false)
  return (
    <>
      <ControlledModal shouldShow={shouldShow} onRequestClose={() => setShouldShow(false)}>
        <h1>Hello!</h1>
      </ControlledModal>
      
      <button onClick={() => setShouldShow(!shouldShow)}>
        { shouldShow ? 'Hide Modal' : 'Show Modal' }
      </button>
    </>
  )
}
