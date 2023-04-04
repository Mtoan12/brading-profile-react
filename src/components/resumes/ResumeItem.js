import React from 'react';
import ResumeCard from './ResumeCard';

const ResumeItem = ({ title, children }) => {
    return (
        <div>
            <h2 className="sub-heading">{title}</h2>
            <div className="cards">{children}</div>
        </div>
    );
};

export default ResumeItem;
