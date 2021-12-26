import React from 'react';
import '../style/index.css';
import { Routes, Route } from "react-router-dom";
import Donation from './Donation';
import Home from './Home'
import ContactSection from './ContactSection';


class App extends React.Component {

    render() {
        return (
                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="contact" element={<ContactSection />} />
                        <Route path="donation" element={<Donation />} />
                    </Routes>
                </>

        )
    }
}

export default App;