import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/about-me/AboutMe';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
function App() {
    return (
        <React.Fragment>
            <Header></Header>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
