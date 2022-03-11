import React from 'react'
import { Box, Spacer, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactMe from './ContactMe';


const ContactSection = ()=> {
  return (
    <Flex bg="gray.800" direction="column" height="100vh">
      <Navbar />
      <Box pt="300px">
        <ContactMe mt="300px" pt="300px" />
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  )
}
export default ContactSection