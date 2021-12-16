import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Navbar from './Navbar';
import { ChakraProvider, theme, Heading, Button, Box, Flex, Text } from '@chakra-ui/react';
import '../style/index.css';
import YoutubeModal from './YoutubeModal';
import ModalTest from './ModalTest';
import Footer from './Footer';
import Donation from './Donation';
import NewVideoListTest from './NewVideoListTest';
import ContactMe from './ContactMe';



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    render() {
        return (
            <ChakraProvider theme={theme} >
                <Box>
                <Navbar />
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                </Box>
                <ContactMe />
                {/* <Donation /> */}
                <Footer />
            </ChakraProvider>
            
        )
    }
}

export default App;