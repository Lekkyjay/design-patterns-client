import styled from 'styled-components'

interface ISplitScreenProps {
  Left: React.FC      //React.ReactNode   does not work here!! Why???
  Right: React.FC      //React.ReactNode   does not work here!! Why???
  leftWeight?: number
  rightWeight?: number
}

interface IPaneProps {
  weight?: number
  right?: number
}

const Container = styled.div`
  display: flex;
`

const Pane = styled.div<IPaneProps>`
  flex: ${props => props.weight};
`

export default function SplitScreen({ Left, Right, leftWeight = 1, rightWeight = 1 }: ISplitScreenProps) {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  )
}
