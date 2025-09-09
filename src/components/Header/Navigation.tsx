import React from 'react';
import { NavigationItem } from '../../types';
import styles from './Header.module.css';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems: NavigationItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      {navItems.map((item: NavigationItem) => (
        <a
          key={item.href}
          href={item.href}
          className={activeSection === item.href.slice(1) ? styles.active : ''}
          onClick={(e) => handleNavClick(e, item.href)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
