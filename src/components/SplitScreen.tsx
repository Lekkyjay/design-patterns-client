import styled from 'styled-components'

interface ISplitScreenProps {
  leftWeight?: number
  rightWeight?: number
  children: React.ReactNode[]
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

export default function SplitScreen({ children, leftWeight = 1, rightWeight = 1 }: ISplitScreenProps) {
  const [ left, right ] = children

  return (
    <Container>
      <Pane weight={leftWeight}>
        { left }
      </Pane>
      <Pane weight={rightWeight}>
        { right }
      </Pane>
    </Container>
  )
}
