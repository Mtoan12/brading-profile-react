import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectStyle.css';
const ProjectList = () => {
    return (
        <div>
            <div className="project-cards">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};

export default ProjectList;
