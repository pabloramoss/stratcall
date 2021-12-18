import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Link
} from '@chakra-ui/react';
import Donation from './Donation';
import { Link as RouterLink } from "react-router-dom";





export default function Navbar(){

  return (
    <Flex backgroundColor="#FF4455" position="fixed" width="100vw" zIndex="100">
      <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
      <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
      <Spacer />
      <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
      <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Inicio</Heading>
      </Link>
      <Link as={RouterLink} to="/contact" _hover={{textDecoration:"none"}}>
      <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Contacto</Heading>
      </Link>
      <Link as={RouterLink} to="/donation" me="20px" _hover={{textDecoration:"none"}}>
      <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Donaciones</Heading>
      </Link>

    </Flex>

  );

};