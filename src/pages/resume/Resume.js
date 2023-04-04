import React from 'react';
import { motion } from 'framer-motion';

import './ResumeStyle.css';
import ResumeItem from '../../components/resumes/ResumeItem';
import ResumeCard from '../../components/resumes/ResumeCard';
import educations from '../../data/education.json';
import experiences from '../../data/experience.json';

const Resume = () => {
    return (
        <motion.div
            id="resume"
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transitionDuration: 1, transitionTimingFunction: 'ease-in-out' }}
        >
            <div className="content-section">
                <h1 className="content-title">
                    <span className="blue-box"></span> Resume
                </h1>
                <div className="resumes-list">
                    <ResumeItem title="Experience">
                        {educations &&
                            educations.map((item) => {
                                return (
                                    <ResumeCard
                                        key={item.id}
                                        time={item.time}
                                        position={item.position}
                                        name={item.name}
                                        location={item.location}
                                        text={item.text}
                                    ></ResumeCard>
                                );
                            })}
                    </ResumeItem>
                    <ResumeItem title="Education">
                        {experiences &&
                            experiences.map((item) => {
                                return (
                                    <ResumeCard
                                        key={item.id}
                                        time={item.time}
                                        position={item.position}
                                        name={item.name}
                                        location={item.location}
                                        text={item.text}
                                    ></ResumeCard>
                                );
                            })}
                    </ResumeItem>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
