import React from 'react';
import laptopImage from '../../assets/Hero/Images/laptop.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Empower Yourself</h1>
        <h2 className={styles.subtitle}>Through Peer-to-Peer <br /> Skill Exchange</h2>
        <p className={styles.description}>
          SkillSwap is an innovative platform that revolutionizes education by
          connecting people who want to learn with those who have the skills to
          teach. Join our community today and embark on a journey of knowledge
          exchange.
        </p>
        <div className={styles.buttons}>
          <button className={styles.getStarted}>Get started</button>
          <button className={styles.signIn}>Sign in</button>
        </div>
      </div>
      <div className={styles.image}>
        <img
          src={laptopImage}
          alt="Laptop showing SkillSwap interface"
          className={styles.laptopImage}
        />
      </div>
    </div>
  );
};

export default Hero;