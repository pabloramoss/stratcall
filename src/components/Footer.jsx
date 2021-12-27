import React from "react";
import { Link, Flex, Heading } from '@chakra-ui/react';
import SocialMedia from "./SocialMedia";


const Footer = () => {

  return (
    <Flex direction="column" justifyContent="center" py="40px" bgColor="#111111">
      <Link href="#top" _hover={{textDecoration:"none"}} my="20px">
        <Heading color="white" textAlign="center" size="md">VALO BRAIN</Heading>
      </Link>
      <SocialMedia />
    </Flex>
  );
};

export default Footer;