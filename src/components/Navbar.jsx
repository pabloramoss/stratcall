import React, {useState} from 'react';
import {
  Heading,
  Flex,
  Spacer,
  Link,
  IconButton,
  Stack
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Searchbar from "./Searchbar"

const Navbar = ()=> {
  const [display, setDisplay] = useState("none");

  return (
    <Flex backgroundColor="#FF4455" position="fixed" width="100%" zIndex="100" justifyContent="space-between" alignItems="center">
      <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
        <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
      <Searchbar />
      <Stack me={10} direction="row" spacing={10} display={{base:"none", md:"none", lg:"flex"}}>
        <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Inicio</Heading>
        </Link>
        <Link as={RouterLink} to="/contact" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Contacto</Heading>
        </Link>
        <Link as={RouterLink} to="/donation" me="20px" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Donaciones</Heading>
        </Link>
      </Stack>
    </Flex>

  );

};

export default Navbar