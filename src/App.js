import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <Header></Header>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
