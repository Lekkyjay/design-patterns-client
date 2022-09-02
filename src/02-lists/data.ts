export interface Person {
  name: string
  age: number
  hairColor?: string
  hobbies?: string[]
}

export interface IPerson {
  person: Person
}

export const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    name: 'Brenda Smith',
    age: 34,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics']
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics']
  }
]


export interface Product {
  name: string
  price: string
  description?: string
  rating?: string
}

export interface IProduct {
  product: Product
}

export const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD sceen, a great deal',
    rating: 4.5
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'Staet-of-the-art technology for optimum running',
    rating: 4.5
  }
]