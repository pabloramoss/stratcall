import React from 'react';
import {
  Box,
  Heading,
  Link,
  Flex,
  Spacer
} from '@chakra-ui/react'

export default function Navbar(){

  return (
    <Flex backgroundColor="#FF4455" position="fixed" width="100vw" zIndex="100">
      <Link href="#" _hover={{textDecoration:"none"}}>
      <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
      <Spacer />
      <Link href="#" _hover={{textDecoration:"none"}}>
      <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Contacto</Heading>
      </Link>
      <Link me="20px" href="#" _hover={{textDecoration:"none"}}>
      <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Donaciones</Heading>
      </Link>
    </Flex>

  );

};