import React from 'react'
import { Box, Spacer, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactMe from './ContactMe';


export default function ContactSection() {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />
      <Box pt="300px">
        <ContactMe mt="300px" pt="300px" />
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  )
}