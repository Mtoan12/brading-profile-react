import React from 'react';

const ResumeCard = ({ time, position, name, location, text }) => {
    return (
        <div className="card">
            <div className="card-left">
                <h3 className="card-time">{time}</h3>
                <p className="card-position">{position}</p>
                <p className="card-name">{name}</p>
                <p className="card-location">{location}</p>
            </div>
            <div className="card-content">{text}</div>
        </div>
    );
};

export default ResumeCard;
