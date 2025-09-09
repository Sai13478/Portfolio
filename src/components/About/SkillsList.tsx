import React from 'react';
import { SkillGroup } from '../../types';
import styles from './About.module.css';

const SkillsList: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js & TypeScript",
        "Responsive Design",
        "Bootstrap & Tailwind CSS",
        "UI/UX Design Principles"
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        "Java",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication & Authorization",
        "Server-side Architecture"
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        "MongoDB",
        "Git & GitHub",
        "VS Code",
        "Postman",
        "npm & Yarn",
        "Agile Methodology"
      ]
    }
  ];

  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>
        Technical <span>Skills</span>
      </h2>
      
      <div className={styles.skillsGrid}>
        {skillGroups.map((group: SkillGroup, index: number) => (
          <div key={index} className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>{group.title}</h3>
            <ul className={styles.skillsList}>
              {group.skills.map((skill: string, skillIndex: number) => (
                <li key={skillIndex} className={styles.skillItem}>
                  <i className="fas fa-check-circle"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
