import useResource from './useResource'

interface IProp {
  userId: number
}

export default function UserInfo3({ userId }: IProp) {
  const user = useResource(`provide-resourceUrl-here/${userId}`)
  const { name, age, hairColor, hobbies } = user || {}

  return user ? (
    <>    
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies?.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  ) : <p>Loading ...</p>
}
