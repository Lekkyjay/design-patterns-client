import { Person, Product } from './data'

interface IRegularListProps {
  items: Person[] | Product[]
  resourceName: string
  ItemComponent: React.ElementType
}

export default function NumberedList({ items, resourceName, ItemComponent }: IRegularListProps) {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} { ...{ [resourceName]: item } } />
        </>
      ))}
    </>
  )
}
