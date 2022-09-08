const isObject = (x: any) => typeof x === 'object' && x !== null

export default function RecursiveComponent({ data }: any) {
  if (!isObject(data)) {
    return (<li>{data}</li>)
  }
  const pairs = Object.entries(data)

  return (
    <>
    {pairs.map(([key, val]) => (
      <li>
        {key}:
        <ul>
          <RecursiveComponent data={val} />
        </ul>
      </li>
    ))}
    </>
  )
}
