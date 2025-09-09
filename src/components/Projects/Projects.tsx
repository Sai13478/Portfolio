import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectData';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>
          Latest <span>Projects</span>
        </h2>
        
        <div className={styles.projectGrid}>
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
