import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "saipramodvedantam@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+91 7997755068" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Your City, Country" }
  ];

  const socialLinks = [
    { icon: FaGithub, url: "#", label: "GitHub" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Contact <span>Me</span></h2>
        
        <div className={styles.contactWrapper}>
          <div className={styles.contactText}>
            <ul className={styles.contactList}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <li key={index} className={styles.contactItem}>
                    <IconComponent />
                    <span>{info.value}</span>
                  </li>
                );
              })}
            </ul>
            
            <div className={styles.contactIcons}>
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a key={index} href={link.url} className={styles.socialIcon}>
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
