import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectCardProps } from '../../types/project';
import styles from './Projects.module.css';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, liveUrl, githubUrl, technologies } = project;

  const handleLiveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (liveUrl === '#') {
      e.preventDefault();
      alert('Live demo coming soon!');
    }
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (githubUrl === '#') {
      e.preventDefault();
      alert('GitHub repository will be available soon!');
    }
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title}
          className={styles.projectImage}
          loading="lazy" // ✅ Better performance
        />
        <div className={styles.overlay}>
          <div className={styles.technologies}>
            {technologies.map((tech: string, index: number) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        
        <div className={styles.projectLinks}>
          <a 
            href={liveUrl} 
            className={styles.viewProject}
            onClick={handleLiveClick}
            target={liveUrl !== '#' ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            View Project
          </a>
          {githubUrl && (
            <a 
              href={githubUrl} 
              className={styles.githubLink}
              onClick={handleGithubClick}
              target={githubUrl !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              aria-label="View GitHub Repository"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
