import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Stack,
  Flex,
  Text
} from '@chakra-ui/react'
import React, {useState} from 'react';
import VideoList from './VideoList';

function ModalTest() {
  const percop = function (){
    console.log('esto esta pasando')
  }
  const { isOpen, onOpen, onClose } = useDisclosure();


  const ListItems = ["video1","video2","video3",];
  const PrintList = ListItems.map((video,index)=><Text cursor="pointer" onClick={onOpen} key={index}>{video}</Text>)

  return (
    <Box color="white">
      <Box>{PrintList}</Box>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="940px" height="600px">
          <ModalHeader>TITULO</ModalHeader>
          <ModalCloseButton />
        <Flex align="end">
          <ModalBody>
            <Text>Reproducir</Text>
          </ModalBody>
        </Flex>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ModalTest;