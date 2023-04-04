import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects.json';
const ProjectList = () => {
    return (
        <div>
            <div className="project-cards">
                {projects &&
                    projects.map((project) => {
                        return (
                            <>
                                <ProjectCard
                                    key={project.id}
                                    projectName={project.name}
                                    roleTitle={project.roleTitle}
                                    text={project.text}
                                ></ProjectCard>
                            </>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProjectList;
