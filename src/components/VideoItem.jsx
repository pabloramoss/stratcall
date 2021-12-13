import React from 'react';
import '../style/video.css';
import { Image, Heading, Flex, Box, Text } from '@chakra-ui/react'

const VideoItem = ({video , handleVideoSelect}) => {


    return (
        <Flex onClick={ () => handleVideoSelect(video)} pt="50px" className="video-image">
            <Box>
                <Image cursor="pointer" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} borderRadius={8}/>
            </Box>
            <Box width="600px" ps="30px">
                <Heading color="white" cursor="pointer" as='h2' fontSize="22px" pb="20px">{video.snippet.title}</Heading>
                <Text color="white">{video.snippet.description}</Text>
            </Box>
        </Flex>
    )
};
export default VideoItem;