import React from 'react';
import '../css/project.css'

function Projects() {
  const projects = [
    {
      name: 'Project 1',
      image: 'project1.jpg',
      website: 'https://www.project1.com'
    },
    {
      name: 'Project 2',
      image: 'project2.jpg',
      website: 'https://www.project2.com'
    },
    {
      name: 'Project 3',
      image: 'project3.jpg',
      website: 'https://www.project3.com'
    }
  ];

  return (
    <div>
    
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <button className="visit-button">Visit Page</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
