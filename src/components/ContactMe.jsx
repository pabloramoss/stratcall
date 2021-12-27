import React from "react";
import { Heading, Link, Button, Flex, Icon } from '@chakra-ui/react';
import {FaTwitter} from "react-icons/fa";


const ContactMe = ()=> {


  return (
    <Flex alignItems="center" direction="column">
      <Heading py="30px" color="white" width={{base: "250px", sm:"400px"}} as="h4" size="md" >Si tienes alguna micro que consideres interesante puedes enviarme el link por MD.</Heading>
      <Link href="https://twitter.com/messages/compose?recipient_id=1466505334898376708&text=Too%20rukoo" target="_blank">
      <Button _hover={{bg:"#63B3ED"}} bg="#0C7ABF" color="white"><Icon pe="5px" as={FaTwitter} w={6} h={6} color="white" />Contáctame</Button>
      </Link>
    </Flex>
  );
}

export default ContactMe