import React from 'react';
import projectImg from '../../img/Leaflet.webp';
const ProjectCard = ({ projectName, roleTitle, text }) => {
    return (
        <div className="project-card">
            <div className="project-body">
                <div className="project-header">
                    <h3 className="project-title">{projectName}</h3>
                    <h5 className="project-role">{roleTitle}</h5>
                </div>
                <p className="project-desc">{text}</p>
            </div>
            <div className="project-img">
                <img src={projectImg} alt="project" />
            </div>
        </div>
    );
};

export default ProjectCard;
