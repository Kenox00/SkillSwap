// Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoImage}></div>
        <a href="/">SkillSwap</a>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="/about">About</a></li>
        <li><a href="/sign-in">Sign in</a></li>
        <li><a href="/sign-up" className={styles.signUp}>Sign up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;