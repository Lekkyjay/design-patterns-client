import styled from "styled-components"

interface ILeft {
  name: string
}

const Container = styled.div`
  background-color: #d3e24c;
`

export default function Left({ name }: ILeft) {
  return (
    <Container>{ name }</Container>
  )
}
