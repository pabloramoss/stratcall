import { Heading, Stack, Image, Flex, useDisclosure, AspectRatio, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

const VideoCard = ({video})=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;

  return(
    <Stack minW={250} spacing={4} rounded={10} p={2} boxShadow="xl" border="solid gray 1px" justifyContent="space-around">
      <Image 
        rounded={10}            
        src={video.thumbnails} 
        _hover={{cursor: "pointer"}}
        onClick={onOpen} />
      <Heading 
        color="white" 
        fontSize="lg" 
        fontWeight={500}
        _hover={{cursor: "pointer"}}
        onClick={onOpen}
      >{video.title}</Heading>
      <Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="940px" pb="15px">
          <ModalHeader fontSize="lg">{video.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe src={videoSrc} allowFullScreen title="Video player" />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  )
}
export default VideoCard