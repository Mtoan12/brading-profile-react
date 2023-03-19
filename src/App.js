import React from 'react';

import './App.css';
import Header from './components/header/Header';
import AnimationRoute from './animation-route/AnimationRoute';
import Footer from './components/footer/Footer';
function App() {
    return (
        <React.Fragment>
            <Header></Header>
            <AnimationRoute></AnimationRoute>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
