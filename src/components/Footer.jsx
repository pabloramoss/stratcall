import React from "react";
import { Flex, Heading } from '@chakra-ui/react';
import SocialMedia from "./SocialMedia";


function Footer(){

  return (
    <Flex direction="column" justifyContent="center" py="40px" bgColor="#111111">
      <Heading color="white" my="20px" textAlign="center" size="md">VALO BRAIN</Heading>
      <SocialMedia />
    </Flex>
  );
};

export default Footer;