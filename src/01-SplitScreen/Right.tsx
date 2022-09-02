import styled from "styled-components"

interface IRight {
  message: string
}

const Container = styled.div`
  background-color: #ff0015;
`

export default function Right({ message }: IRight) {
  return (
    <Container>{ message }</Container>
  )
}
