import { Center } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Center p='20' >
        <h1>{greeting}</h1>
    </Center>
  )
}

export default ItemListContainer