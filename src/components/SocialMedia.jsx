import React from "react";
import { Flex, Link, Icon } from '@chakra-ui/react';
import { FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";

const SocialMedia = ()=> {

  return (
    <Flex justifyContent="center">
      <Link href="https://twitter.com/valobraingg" target="_blank" borderRadius="md" _hover={{bg:"gray"}} p="5px" mx="10px"><Icon as={FaTwitter} w={6} h={6} color="white" /></Link>
      <Link href="https://www.tiktok.com/@valobrain" target="_blank" borderRadius="md" _hover={{bg:"gray"}} p="5px" mx="10px" ><Icon as={FaTiktok} w={6} h={6} color="white" /></Link>
      <Link href="https://www.youtube.com/channel/UCjg1YvYLP3KbPPdEZ57GJuA" target="_blank" borderRadius="md" _hover={{bg:"gray"}} p="5px" mx="10px" ><Icon as={FaYoutube} w={6} h={6} color="white" /></Link>
    </Flex>
  );
};

export default SocialMedia;