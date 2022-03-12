import React, {useState} from 'react';
import {
  Heading,
  Flex,
  Spacer,
  Link,
  IconButton,
  Stack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Searchbar from "./Searchbar"

const Navbar = ()=> {
  const [display, setDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex backgroundColor="#FF4455" position="fixed" width="100%" zIndex="100" justifyContent="space-between" alignItems="center">
      <Link href="https://valobrain.vercel.app/" _hover={{textDecoration:"none"}}>
        <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
      <Searchbar />
      <Stack me={10} direction="row" spacing={10} display={{base:"none", md:"none", lg:"flex"}}>
        <Link href="https://valobrain.vercel.app/" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Inicio</Heading>
        </Link>
        <Link as={RouterLink} to="/contact" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Contacto</Heading>
        </Link>
        <Link as={RouterLink} to="/donation" me="20px" _hover={{textDecoration:"none"}}>
          <Heading cursor="pointer" color="white" size='sm'>Donaciones</Heading>
        </Link>
      </Stack>
      <Button mx={5} display={{base: "flex", lg:"none"}} ref={btnRef} bg='red.300' onClick={onOpen}>
        <Icon color="white" as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody bg="red.400">
            <Stack mt={50} me={10} spacing={10}>
              <Link href="https://valobrain.vercel.app/" _hover={{textDecoration:"none"}}>
                <Heading cursor="pointer" color="white" fontWeight={500} fontSize="28">INICIO</Heading>
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{textDecoration:"none"}}>
                <Heading cursor="pointer" color="white" fontWeight={500} fontSize="28">CONTACTO</Heading>
              </Link>
              <Link as={RouterLink} to="/donation" me="20px" _hover={{textDecoration:"none"}}>
                <Heading cursor="pointer" color="white" fontWeight={500} fontSize="28">DONACIONES</Heading>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>

  );

};

export default Navbar