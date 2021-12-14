import React from 'react';
import '../style/video.css';
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
    Text,
    Image,
    Heading
  } from '@chakra-ui/react'

const VideoItem = ({video , handleVideoSelect}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;



    return (
        <Flex onClick={ () => handleVideoSelect(video)} pt="50px" className="video-image">
            <Box>
                <Image onClick={onOpen} cursor="pointer" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} borderRadius={8}/>
            </Box>
            <Box width="600px" ps="30px">
                <Heading color="white" onClick={onOpen} cursor="pointer" as='h2' fontSize="22px" pb="20px">{video.snippet.title}</Heading>
                <Text color="white">{video.snippet.description}</Text>
            </Box>
            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="940px" height="580px">
          <ModalHeader>{video.snippet.title}</ModalHeader>
          <ModalCloseButton />
        <Flex align="end">
          <ModalBody>
          <iframe width="900px" height="500px" src={videoSrc} allowFullScreen title="Video player" />
          </ModalBody>
        </Flex>
        </ModalContent>
      </Modal>
        </Flex>
    )
};
export default VideoItem;