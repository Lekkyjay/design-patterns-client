type ButtonProps = {
  size?: string 
  color?: string 
  text: string
  [x:string]: any;
}

export const Button = (props: ButtonProps) => {
  const { size, color, text, ...otherProps } = props

  return (
    <button style={{
      padding: size === 'large' ? '32px' : '8px',
      fontSize: size === 'large' ? '32px' : '16px',
      backgroundColor: color
    }} {...otherProps} >{text}</button>
  )
}

export const DangerButton = (props: ButtonProps) => {
  return (
    <Button { ...props } color="red" />
  )
}

export const BigSuccessButton = (props: ButtonProps) => {
  return (
    <Button { ...props } color="green" size="large" />
  )
}

export default function ComponentComposition() {
  return (
    <div>ComponentComposition</div>
  )
}
