import { Person, Product } from './data'

interface IRegularListProps {
  items: Person[] | Product[]
  resourceName: string
  ItemComponent: React.ElementType
}

export default function RegularList({ items, resourceName, ItemComponent }: IRegularListProps) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} { ...{ [resourceName]: item } } />
      ))}
    </>
  )
}
