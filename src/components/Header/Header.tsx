
import React from 'react';
import Navigation from './Navigation.tsx';
import useScrollspy from '../../hooks/useScrollspy';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const sectionIds: string[] = ['home', 'about', 'projects', 'contact'];
  const activeSection: string = useScrollspy(sectionIds);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>V Sai Pramodu</div>
      <Navigation activeSection={activeSection} />
    </header>
  );
};

export default Header;
