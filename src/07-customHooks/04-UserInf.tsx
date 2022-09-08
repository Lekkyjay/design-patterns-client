import axios from 'axios'
import useDataSource from './04-useDataSource'

interface IProp {
  userId: number
}

const serverResource = (resourceUrl: string) => async () => {
  const response = axios.get(resourceUrl)
  return response
}

export default function UserInfo4({ userId }: IProp) {
  const user = useDataSource(serverResource((`provide-resourceUrl-here/${userId}`)))

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
