import React, {useState} from "react";
import { Link, Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react';
import VideoItem from './VideoItem';
import axios from "axios"
//https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjg1YvYLP3KbPPdEZ57GJuA&maxResults=3&order=date&type=video&key=AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM


function LatestVideos(){
  const [latestVideos, setLatestVideos] = useState();

  axios('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjg1YvYLP3KbPPdEZ57GJuA&maxResults=3&order=date&type=video&key=AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM').then(res=>{
    console.log(res.data.items);
    setLatestVideos(res.data.items)
  })

  console.log(latestVideos)
  
  return(
    <Flex>
      <Box color="white">HOlam undo</Box>
    </Flex>
  )
    
}

export default LatestVideos;