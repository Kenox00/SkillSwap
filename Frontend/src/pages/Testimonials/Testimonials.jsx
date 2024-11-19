import React from 'react';
import styles from './Testimonials.module.css';
import badge from '../../assets/Testimonials/partener1.png'
import partner from '../../assets/Testimonials/partern2.png'
import profile from '../../assets/Testimonials/profile.png'
const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Unlock Your Potential with SkillSwap's Gamification Elements</h2>
        <div className={styles.elements}>
          <div className={styles.element}>
            <img src={badge} alt="Badge" className={styles.elementIcon} />
            <h3 className={styles.elementTitle}>Stay Motivated and Engaged with SkillSwap</h3>
            <p>Earn badges, achievements, and track your progress as you learn and share skills.</p>
          </div>
          <div className={styles.element}>
            <img src={partner} alt="Partner" className={styles.elementIcon} />
            <h3 className={styles.elementTitle}>Find Your Perfect Skill Exchange Partner with SkillSwap</h3>
            <p>Our intelligent matching system connects you with users who complement your skills and learning goals.</p>
          </div>
        </div>
        <blockquote className={styles.testimonial}>
          <p>"SkillSwap has been a game-changer for me. I've been able to learn new skills from experts in their fields and share my own expertise with others. It's a truly collaborative and empowering platform."</p>
          <div className={styles.profile}>
            <img src={profile} alt="Profile" className={styles.profileImage} />
          </div>
          <cite className={styles.author}>- Arsene Wenger, Marketing Manager, XYZ Company</cite>
        </blockquote>

      </div>
    </div>
  );
};

export default Testimonial;