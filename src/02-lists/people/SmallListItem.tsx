import { IPerson } from "../../data";

export default function SmallListItem({person}: IPerson) {
  const { name, age } = person

  return (
    <p>Name: { name }, Age: { age } years</p>
  )
}
