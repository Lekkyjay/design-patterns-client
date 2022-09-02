import React from 'react'
import { products } from '../02-lists/data'
import LargeListItem from '../02-lists/products/LargeListItem'
import Modal from './Modal'

export default function App03() {
  return (
    <>
      <Modal>
        <LargeListItem product={products[0]} />
      </Modal>
    </>
  )
}
