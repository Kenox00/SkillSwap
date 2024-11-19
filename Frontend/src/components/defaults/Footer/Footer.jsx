import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Brand */}
        <div className={styles.brand}>
          <div className={styles.logo} />
          <span className={styles.brandName}>SkillSwap</span>
        </div>

        {/* Subscribe Section */}
        <div className={styles.subscribe}>
          <h3 className={styles.title}>Subscribe</h3>
          <p className={styles.description}>
            Stay updated with our latest features and releases.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Our newsletter..."
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;