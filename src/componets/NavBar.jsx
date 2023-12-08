import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { SlGameController } from "react-icons/sl";

const NavBar = () => {
  return (
    <div>

      <Flex bg='blue.100' >
        <Box p='4' >
          <SlGameController />
          Gamer Store
        </Box>
        <Spacer />

        <Button colorScheme='black' variant='link'>
          Inicio
        </Button>
        <Spacer />
        <Button colorScheme='black' variant='link'>
          Juegos
        </Button>
        <Spacer />

        <Menu p='4'>
          <MenuButton >
            Componentes de PC
          </MenuButton>
          <MenuList>
            <MenuItem>Placa de video</MenuItem>
            <MenuItem>Memorias</MenuItem>
            <MenuItem>Procesadores</MenuItem>
            <MenuItem>Fuentes</MenuItem>
            <MenuItem>Gabinetes</MenuItem>
          </MenuList>
        </Menu>

        <Spacer />
        <Spacer />


        <Box p='4' >
          <CartWidget />
        </Box>
      </Flex>

    </div>

  )
}

export default NavBar