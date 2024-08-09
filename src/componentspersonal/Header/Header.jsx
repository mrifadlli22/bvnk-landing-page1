import React, { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activeToggle, setActiveToggle] = useState('personal');
  const navigate = useNavigate();

  const handleToggle = (type) => {
    setActiveToggle(type);
    if (type === 'personal') {
      navigate('/personalpage', { replace: true }); // navigate dengan opsi replace
      window.location.reload(); // memuat ulang halaman
    } else if (type === 'business') {
      navigate('/businesspage', { replace: true }); // navigate dengan opsi replace
      window.location.reload(); // memuat ulang halaman
    }
  };
  

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.blurry);
      } else {
        header.classList.remove(styles.blurry);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftGroup}>
          <Logo />
          <div style={{fontSize:"15px"}} className={styles.toggleGroup}>
            <button 
              className={`${styles.toggleButton} ${activeToggle === 'personal' ? styles.active : ''}`}
              onClick={() => handleToggle('personal')}
            >
              Personal
            </button>
            <button
              className={`${styles.toggleButton} ${activeToggle === 'business' ? styles.active : ''}`}
              onClick={() => handleToggle('business')}
            >
              Business
            </button>
          </div>
        </div>
        <div className={styles.rightGroup}>
          <nav className={styles.navigation}>
            <NavLinks />
          </nav>
          <div className={styles.buttonGroup}>
            <Button variant="primary" onClick={handleLoginClick}>Login</Button>
            <Button variant="secondary" onClick={handleSignUpClick}>Sign Up →</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
