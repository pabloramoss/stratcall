import React from "react";
import {
  Box,
  Text,
  useDisclosure
} from '@chakra-ui/react'

function ListTest(){
  const ListItems = ["video1","video2","video3",];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const PrintList = ListItems.map((video,index)=><Text cursor="pointer" onClick={onOpen} key={index}>{video}</Text>)
  

  return (
    <Box>{PrintList}</Box>
  );
};

export default ListTest;