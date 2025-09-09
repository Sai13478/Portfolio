import React from 'react';
import SkillsList from './SkillsList.tsx';
import styles from './About.module.css';

const About: React.FC = () => {
  const handleDownloadResume = (): void => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume/V-Sai-Pramodu-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'V-Sai-Pramodu-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutWrapper}>
          {/* Profile Image Section */}
          <div className={styles.profileSection}>
            <div className={styles.box}>
              <div className={styles.img}>
                <img 
                  src="/images/profile.jpg" 
                  alt="V Sai Pramodu - Full Stack Developer"
                />
              </div>
            </div>
          </div>

          {/* About Text Section */}
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              About <span>Me</span>
            </h2>
            <h4 className={styles.aboutSubtitle}>
              Full Stack Developer & UI/UX Enthusiast
            </h4>
            
            <p className={styles.aboutDescription}>
              I am a passionate and driven Full Stack Developer with a strong foundation in 
              building comprehensive web solutions. My journey into software development began 
              with a curiosity for how things are built on the web, which quickly grew into a 
              passion for creating clean, functional, and user-friendly applications.
            </p>
            
            <p className={styles.aboutDescription}>
              My academic background provided me with a solid understanding of computer science 
              principles, and I have since applied this knowledge to real-world projects. I am 
              proficient in <strong>Java</strong> for developing robust and efficient backend 
              systems, and I excel in front-end technologies like <strong>HTML</strong>, 
              <strong>CSS</strong>, and <strong>JavaScript</strong> to create visually appealing 
              and responsive user interfaces.
            </p>
            
            <p className={styles.aboutDescription}>
              I also have hands-on experience with <strong>MongoDB</strong> for database management 
              and <strong>React JS</strong> for building dynamic single-page applications. Beyond 
              the code, I am a dedicated problem-solver who thrives on new challenges. I am a firm 
              believer in continuous learning and always stay updated with the latest industry trends 
              and technologies.
            </p>
            
            <p className={styles.aboutDescription}>
              I am a collaborative team player, always eager to contribute my skills and learn from 
              others to build something truly impactful. I am excited about the opportunity to bring 
              my technical skills and enthusiasm to a team that values innovation and growth.
            </p>

            <button 
              onClick={handleDownloadResume}
              className={styles.btnBox}
              aria-label="Download Resume"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <SkillsList />
      </div>
    </section>
  );
};

export default About;
