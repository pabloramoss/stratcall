import React from "react";
import { Box, Heading, Link, Button, Flex, Icon } from '@chakra-ui/react';
import {FaTwitter} from "react-icons/fa";


export default function ContactMe(){


  return (
    <Flex alignItems="center" direction="column">
      <Heading py="30px" color="white" width="400px" as="h4" size="md" >Si tienes alguna micro que consideres interesante puedes enviarme el link por MD.</Heading>
      <Link href="https://twitter.com/messages/1115061714-1466505334898376708?text=" target="_blank">
      <Button _hover={{bg:"#63B3ED"}} bg="#0C7ABF" color="white"><Icon pe="5px" as={FaTwitter} w={6} h={6} color="white" />Contáctame</Button>
      </Link>
    </Flex>
  );
}