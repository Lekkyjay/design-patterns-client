import { IProduct } from '../data'

export default function SmallListItem({ product }: IProduct) {
  const { name, price } = product

  return (
    <h3>{name} - {price}</h3>
  )
}
