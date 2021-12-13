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
import VideoList from './VideoList';

function YoutubeModal({video}) {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(video);

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
            <iframe width="900px" height="500px" src={videoSrc} allowFullScreen title="Video player" />
          </ModalBody>
        </Flex>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default YoutubeModal;