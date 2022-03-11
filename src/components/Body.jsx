import React, { useContext } from 'react';
import {Stack} from "@chakra-ui/react"
import Hero from "./Hero"
import VideoList from './VideoList';
import VideosContext from '../context/VideoContext';
import RecentVideos from './RecentVideos';

const Body = ()=> {
  const {videos} = useContext(VideosContext)

  return(
    <Stack bg='gray.800' alignItems="center">
      {(videos.length)?
          <></>
          :
          <Hero />
      }
        {(videos.length)?
          <VideoList />
          :
          <RecentVideos />
      }
    </Stack>
  )
}
export default Body