import React from 'react';
import Capenter from '../../assets/Unlock/Capentry.png';
import styles from './Unlock.module.css';

const Unlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Unlock your potential</h1>
        <h2 className={styles.subtitle}>with SkillSwap</h2>
        <p className={styles.description}>
          SkillSwap is the platform where you can create a detailed profile showcasing the skills you possess and the skills you wish to learn. Connect with like-minded individuals and embark on a journey of mutual skill exchange.
        </p>
        <div className={styles.actions}>
          <div className={styles.findPeople}>
            <h3 className={styles.sectionTitle}>Find people</h3>
            <p>Discover complementary people for skill exchange sessions and unlock new opportunities for growth.</p>
            <a href="#" className={styles.getStarted}>Get started</a>
          </div>
          <div className={styles.joinCommunity}>
            <h3 className={styles.sectionTitle}>Join Community</h3>
            <p>Engage with a vibrant community through forums, challenges, and scheduled learning sessions.</p>
            <a href="#" className={styles.getStarted}>Get started</a>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={Capenter} alt="Workshop" className={styles.workshopImage} />
      </div>
    </div>
  );
};

export default Unlock;