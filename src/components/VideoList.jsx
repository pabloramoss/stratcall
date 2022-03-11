import React, {useContext} from 'react';
import VideoItem from './VideoItem';
import { Stack, Heading } from '@chakra-ui/react'
import VideosContext from '../context/VideoContext';

const VideoList = () => {
    const { videos } = useContext(VideosContext);

    return (    
        <Stack spacing={6} mt={30}>
            <Heading color="white" fontSize={25} fontWeight={600} opacity={0.6}>{videos.length} videos</Heading>
            <Stack  mb={30} pb={100}>
            {videos.map(video => <VideoItem key={video.id.videoId} video={video} />)}
            </Stack>
        </Stack>);
};
export default VideoList;