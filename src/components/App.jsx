import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';
import '../style/index.css';
import Footer from './Footer';
import ContactMe from './ContactMe';
import { Routes, Route } from "react-router-dom";
import Donation from './Donation';
import Home from './Home'


class App extends React.Component {

    render() {
        return (
                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="donation" element={<Donation />} />
                    </Routes>
                </>

        )
    }
}

export default App;