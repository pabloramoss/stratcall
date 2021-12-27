import React, {useState} from 'react';
import {
  Heading,
  Flex,
  Spacer,
  Link,
  IconButton
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = ()=> {
  const [display, setDisplay] = useState("none");

  return (
    <Flex backgroundColor="#FF4455" position="fixed" width="100%" zIndex="100">
      <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
      <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
      <Spacer />
      <Flex alignItems="center">
        <IconButton bg="#fc6c78" aria-label='Open Menu' size="lg" mr={2} icon={<HamburgerIcon color="white" />} display={{base:"flex", md:"flex", lg:"none"}} onClick={()=> setDisplay("flex")}/>
      </Flex>
      <Flex display={{base:"none", md:"none", lg:"flex"}}>
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
      <Flex width="100vw" bg="#FF4455" zIndex="50" h="100vh" pos="fixed" top="0" left="0" overflow="auto" direction="column" display={display}>
        <Flex justifyContent="end">
          <IconButton zIndex="51" bg="#fc6c78" mt={2} mr={2} aria-label="Close Menu" size="lg" icon={<CloseIcon color="white" />} onClick={()=> setDisplay("none")} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Link as={RouterLink} to="/" _hover={{textDecoration:"none"}}>
              <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Inicio</Heading>
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{textDecoration:"none"}}>
              <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Contacto</Heading>
            </Link>
            <Link as={RouterLink} to="/donation" _hover={{textDecoration:"none"}}>
              <Heading mx="10px" cursor="pointer" color="white" size='sm' p="20px">Donaciones</Heading>
            </Link>
        </Flex>
      </Flex>
    </Flex>

  );

};

export default Navbar