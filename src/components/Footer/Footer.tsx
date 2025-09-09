import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import { SocialLink } from '../../types';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { 
      icon: FaGithub,
      url: "https://github.com/Sai13478", 
      label: "GitHub" 
    },
    { 
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/v-ananda-naga-sai-pramodu-7068b1375/", 
      label: "LinkedIn" 
    },
    { 
      icon: FaTwitter,
      url: "https://twitter.com/your-handle", 
      label: "Twitter" 
    },
    { 
      icon: FaEnvelope,
      url: "mailto:saipramodvedantam@gmail.com", 
      label: "Email" 
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      value: "saipramodvedantam@gmail.com",
      href: "mailto:saipramodvedantam@gmail.com"
    },
    {
      icon: FaPhone,
      value: "+91 7997755068",
      href: "tel:+917997755068"
    },
    {
      icon: FaMapMarkerAlt,
      value: "Tanuku,AndhraPradesh",
      href: "#"
    }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Content */}
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>V Sai Pramodu</h3>
            <p className={styles.footerDescription}>
              Full Stack Developer passionate about creating modern, 
              user-friendly web applications with clean code and innovative solutions.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className={styles.contactItem}>
                    <IconComponent />
                    {info.href !== "#" ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              Copyright © {currentYear} V Sai Pramodu. All rights reserved.
            </p>
            <button 
              onClick={handleScrollToTop}
              className={styles.scrollToTop}
              aria-label="Scroll to top"
            >
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
