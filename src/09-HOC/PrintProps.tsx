interface IPP {  
  [x:string]: any
}

export const printProps = (Component: React.ElementType) => {
  return ({...props}: IPP) => {
    console.log(props)

    return <Component { ...props } />
  }
}
//youtube: hard react interview questions (3 patterns)