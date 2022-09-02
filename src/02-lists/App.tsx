import { people, Product, products } from './data'
import NumberedList from './NumberedList'
import LargeListItem from './people/LargeListItem'
import SmallListItem from './people/SmallListItem'
import LargeListItemProd from './products/LargeListItem'
import SmallListItemProd from './products/SmallListItem'
import RegularList from './RegularList'

export default function App() {
  return (
    <>
      <RegularList 
        items={people} 
        resourceName='person' 
        ItemComponent={SmallListItem} 
      />
      <hr />
      <RegularList 
        items={people} 
        resourceName='person' 
        ItemComponent={LargeListItem} 
      />
      <hr />
      <NumberedList 
        items={people} 
        resourceName='person' 
        ItemComponent={LargeListItem} 
      />
      <hr />
      <hr />
      <RegularList 
        items={products as unknown as Product[]} 
        resourceName='product' 
        ItemComponent={SmallListItemProd}        
      />
      <hr />
      <RegularList 
        items={products as unknown as Product[]} 
        resourceName='product' 
        ItemComponent={LargeListItemProd}  
      />
      <hr />
      <NumberedList 
        items={products as unknown as Product[]} 
        resourceName='product' 
        ItemComponent={LargeListItemProd}  
      />
    </>
  )
}
