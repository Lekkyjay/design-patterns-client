import React, { useEffect, useState } from 'react'

export default function ControlledForm() {
  const [nameInputError, setNameInputError] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState<number>(0)
  const [hairColor, setHairColor] = useState('')

  useEffect(() => {
    if (name.length !== 0 && name.length < 2) {
      setNameInputError('Name must be 2 or more characters')
    } else {
      setNameInputError('')
    }
  }, [name])
  

  return (
    <form>
      { nameInputError && <p>{nameInputError}</p>}
      <input 
        type="text" 
        name='name' 
        placeholder='Name' 
        value={name} 
        onChange={e => setName(e.target.value)} />
      <input 
        type="number" 
        name='age' 
        placeholder='Age' 
        value={age} 
        onChange={e => setAge(Number(e.target.value))} />
      <input 
        type="text" 
        name='hairColor' 
        placeholder='Hair color' 
        value={hairColor} 
        onChange={e => setHairColor(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}
