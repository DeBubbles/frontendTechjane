import React from 'react';
import '../css/project.css'

function Projects() {
  const projects = [
    {
      name: 'Grinta Vitality Lab',
      image: 'src/assets/projects/grintavitalitylab.png',
      description: 'Bij Grinta Vitality Lab helpen we jou om jouw fitnessdoelen te bereiken en de beste versie van jezelf te worden. Onze persoonlijke training, groepslessen, fitnessbegeleiding en wellnessfaciliteiten zijn ontworpen om jouw gezondheid en welzijn te verbeteren. Sluit je aan bij onze fitnessfamilie en begin vandaag aan jouw weg naar een gezonder en fitter leven!',
      website: 'https://www.grintavitalitylab.be/'
    },
    {
      name: 'Katia Van Cauwenberghe',
      image: 'src/assets/projects/katiavancauwenberghe.png',
      description: '“Het leven zelf en alle mogelijkheden die ze biedt, heeft mij steeds geboeid, en mijn doelstelling is om alles zoveel mogelijk te verkennen en uit te diepen.”',
      website: 'https://katiavancauwenberghe.be/'
    },
    {
      name: 'Rman',
      image: 'src/assets/projects/rman.png',
      description: 'The power of visible. Rman kan je helpen bij al je grafische opdrachten zoals drukwerk, doeken, borden, textiel en alles wat je verder nog nodig hebt. Daarnaast kunnen we een website voor je creëren die past bij de stijl van je algehele merk. En heb je een nieuwe computer nodig om alles te kunnen bekijken, dan leveren we die ook!',
      website: 'https://www.rman.be/'
    },
    {
      name: 'Zumias',
      image: 'src/assets/projects/zumias.png',
      description: 'We provide healthcare institutions worldwide with a wide range of expertly-crafted stainless steel instruments and comprehensive support in order to achieve better patient outcomes.',
      website: 'https://zumias.com/'
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
