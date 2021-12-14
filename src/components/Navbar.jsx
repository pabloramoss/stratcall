import React from 'react';
import { Box, theme, Heading, Link } from '@chakra-ui/react'

export default function Navbar(){

  return (
    <Box backgroundColor="#FF4455" position="fixed" width="100vw" zIndex="100">
      <Link href="#" _hover={{textDecoration:"none"}}>
      <Heading color="white" as='h2' size='md' p="20px">VALO BRAIN</Heading>
      </Link>
    </Box>

  );

};