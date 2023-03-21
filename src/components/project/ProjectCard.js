import React from 'react';
import './ProjectStyle.css';
import projectImg from '../../img/Leaflet.webp';
const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-body">
                <div className="project-header">
                    <h3 className="project-title">Project name 01</h3>
                    <h5 className="project-role">Role Title</h5>
                </div>
                <p className="project-desc">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                    click “Edit Text” or double click me to add your own content and make changes to
                    the font. I’m a great place for you to tell a story and let your users know a
                    little more about you
                </p>
            </div>
            <div className="project-img">
                <img src={projectImg} alt="project" />
            </div>
        </div>
    );
};

export default ProjectCard;
