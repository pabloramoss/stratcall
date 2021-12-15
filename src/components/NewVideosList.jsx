import React from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  Link,
  Flex,
  Spacer,
  AspectRatio
} from '@chakra-ui/react';

const NewVideosList = () => {

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjg1YvYLP3KbPPdEZ57GJuA&maxResults=3&order=date&type=video&key=AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM";
  axios({
    method: 'GET',
    url: url
  }).then(res=>{
    const video1 = `https://www.youtube.com/embed/${res.data.items[0].id.videoId}`;
    const video2 = `https://www.youtube.com/embed/${res.data.items[1].id.videoId}`;
    const video3 = `https://www.youtube.com/embed/${res.data.items[2].id.videoId}`;
    console.log(res.data);
    console.log(res.data.items[0].id.videoId);
    console.log(res.data.items[1].id.videoId);
    console.log(res.data.items[2].id.videoId);
  })
    
  return (
    <Flex>
      <Box>
      <AspectRatio maxW='560px' ratio={1}>
        <iframe
          title='naruto'
          src= {video1}
          allowFullScreen
        />
      </AspectRatio>
      <Heading>
        {res.data.items[0].snippet.title}
      </Heading>

      </Box>
    </Flex>
  );
};

export default NewVideosList;