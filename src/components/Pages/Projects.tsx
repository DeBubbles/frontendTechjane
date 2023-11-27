import React from 'react';
import '../css/project.css'

function Projects() {
  const projects = [
    {
      name: 'Project 1',
      image: 'https://picsum.photos/1200/600?random=1',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.project1.com'
    },
    {
      name: 'Project 2',
      image: 'https://picsum.photos/1200/600?random=2',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.project2.com'
    },
    {
      name: 'Project 3',
      image: 'https://picsum.photos/1200/600?random=3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.project3.com'
    },
    {
      name: 'Project 3',
      image: 'https://picsum.photos/1200/600?random=4',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      website: 'https://www.project4.com'
    }
  ];

  return (
  <div>
    <div className="project-list">
      {projects.map((project, index) => (
        <a href={project.website} target="_blank" rel="noopener noreferrer" key={index} className="project-link">
          <div className="project-card">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

}

export default Projects;
