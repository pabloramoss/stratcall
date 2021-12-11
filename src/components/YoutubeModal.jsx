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
  Flex
} from '@chakra-ui/react'
import React, {useState} from 'react';

function YoutubeModal({video}) {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="940px" height="600px">
          <ModalHeader>{video.snippet.title}</ModalHeader>
          <ModalCloseButton />
        <Flex align="end">
          <ModalBody>
            <div>hola mundo</div>
            <iframe width="900px" height="500px" src={videoSrc} allowFullScreen title="Video player" />
          </ModalBody>
        </Flex>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default YoutubeModal;