import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import Navbar from './Navbar';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import '../style/index.css';
import Footer from './Footer';
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
                <Flex direction="column" height="100vh">
                    <Box pb="50px">
                    <Navbar />
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                    <ContactMe />
                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </Box >
                    <Spacer />
                    <Footer />
                </Flex>

        )
    }
}

export default App;