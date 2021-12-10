import React from 'react';
import '../style/video.css';
import { Image, Heading, Flex, Box } from '@chakra-ui/react'


const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <Flex onClick={ () => handleVideoSelect(video)} pt="50px" className="video-image">
            <Box>
                <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} borderRadius={8}/>
            </Box>
            <Box width="500px" ps="30px">
                <Heading as='h2' size='md'>{video.snippet.title}</Heading>
                <p>{video.snippet.description}</p>
            </Box>
        </Flex>
    )
};
export default VideoItem;