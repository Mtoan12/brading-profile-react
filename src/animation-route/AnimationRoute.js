import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from '../components/about-me/AboutMe';
import Resume from '../components/resume/Resume';

import { AnimatePresence } from 'framer-motion';
import Project from './../components/project/Project';
const AnimationRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimationRoute;
