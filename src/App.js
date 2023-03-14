import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
}

export default App;
