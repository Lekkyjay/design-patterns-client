import { BigSuccessButton, DangerButton } from "./ComponentComposition"
import RecursiveComponent from "./RecursiveComponent"

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi'
      },
      b32: {
        message: 'Hi'
      }
    }
  },
  c: {
    c1: 2,
    c2: 3
  }
}

export default function App08() {
  return (
    <>
      <RecursiveComponent data={nestedObject} />
      <br /><br /><hr />
      <DangerButton text="Don't do it" />
      <br /><br />
      <DangerButton text="Watch it!!!" size="large" />
      <br /><br />
      <BigSuccessButton text="Yes!!!" />
    </>
  )
}
