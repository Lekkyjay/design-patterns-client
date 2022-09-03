import React from 'react'

export default function UncontrolledForm() {
  //get values from the form using Ref
  const nameInputRef = React.createRef<HTMLInputElement>()
  const ageInputRef = React.createRef<HTMLInputElement>()
  const hairColorInputRef = React.createRef<HTMLInputElement>()

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log(nameInputRef.current?.value)
    console.log(ageInputRef.current?.value)
    console.log(hairColorInputRef.current?.value)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='Name' ref={nameInputRef} />
      <input type="number" name='age' placeholder='Age' ref={ageInputRef} />
      <input type="text" name='hairColor' placeholder='Hair Color' ref={hairColorInputRef} />
      <input type="submit" value='Submit' />
    </form>
  )
}
