import React from 'react';
import { motion } from 'framer-motion';
import './ProjectStyle.css';
import ProjectList from './ProjectList';
const Project = () => {
    const text = `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`;
    return (
        <motion.div
            id="projects"
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transitionDuration: 1, transitionTimingFunction: 'ease-in-out' }}
        >
            <div className="content-section">
                <h1 className="content-title">
                    <span className="blue-box"></span> Projects
                </h1>
                <p className="projects-text">{text}</p>
                <ProjectList></ProjectList>
            </div>
        </motion.div>
    );
};

export default Project;
