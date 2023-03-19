import React from 'react';
import { motion } from 'framer-motion';

import './ResumeStyle.css';
import ResumeItem from './ResumeItem';
import ResumeCard from './ResumeCard';
const Resume = () => {
    const text = `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

    I’m a great place for you to tell a story and let your users know a little more about you.`;
    return (
        <motion.div
            id="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transitionDuration: 1, transitionTimingFunction: 'ease-in-out' }}
        >
            <div className="resume-content">
                <h1 className="content-title">
                    <span className="blue-box"></span> Resume
                </h1>
                <div className="resumes-list">
                    <ResumeItem title="Experience">
                        <ResumeCard
                            time="2035 - Present"
                            position="JOB POSITION"
                            name="Company Name"
                            location="Company Location"
                            text={text}
                        ></ResumeCard>
                        <ResumeCard
                            time="2035 - 2035"
                            position="JOB POSITION"
                            name="Company Name"
                            location="Company Location"
                            text={text}
                        ></ResumeCard>
                    </ResumeItem>
                    <ResumeItem title="Education">
                        <ResumeCard
                            time="2035 - 2035"
                            position="UNIVERSITY NAME"
                            name="Degree Level"
                            location="University Location"
                            text={text}
                        ></ResumeCard>
                        <ResumeCard
                            time="2035 - 2035"
                            position="UNIVERSITY NAME"
                            name="Degree Level"
                            location="University Location"
                            text={text}
                        ></ResumeCard>
                    </ResumeItem>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
