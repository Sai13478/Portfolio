import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import TypedText from './TypedText';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaGithub, url: "#", label: "GitHub" }
  ];

  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContent}>
        <h1>Hi, It's <span>Pramodu</span></h1>
        <h3>I'm a <span><TypedText /></span></h3>
        <p>I build dynamic and user-friendly web applications...</p>
        
        <div className={styles.homeSci}>
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a key={index} href={link.url} aria-label={link.label}>
                <IconComponent />
              </a>
            );
          })}
        </div>
        
        <a href="#contact" className={styles.btnBox}>Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
