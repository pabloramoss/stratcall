import React, {useState} from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import Navbar from './Navbar';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import '../style/index.css';
import Footer from './Footer';
import axios from "axios"


const App = ()=> {
    const [videos, setVideos] = useState([])
    const [selectedVideos, setSelectedVideos] = useState(null)

    const handleSubmit = async (termFromSearchBar) =>{
    const response = await youtube.get('/search',{
        params: {
        q: termFromSearchBar
        }
    })
    setVideos(response.data.items)
    console.log("response", videos)
    }
    const handleVideoSelect = (video) =>{
        setSelectedVideos(video)
    } //ver esta funcion que creo que no hace nada

    return (
            <Flex direction="column" height="100vh">
                <Box pb="50px">
                <Navbar />
                <SearchBar handleFormSubmit={handleSubmit}/>
                <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                </Box >
                <Spacer />
                <Footer />
            </Flex>
    )
}

export default App;