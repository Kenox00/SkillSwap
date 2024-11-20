import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <div className={styles.logo}>
        <div className={styles.circle}></div>
        <h2>Sign up</h2>
        </div>
        <div className={styles.formsAndtitle}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Sign up to <br /> <span className={styles.brand}>SkillSwap</span>
          </h1>
        </div>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Fullnames
          </label>
          <input
            type="text"
            id="Fullnames"
            className={styles.input}
            placeholder="john Doe"
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="johndoe@gmail.com"
          />
          <label htmlFor="email" className={styles.label}>
            Skill to offer
          </label>
          <select className={styles.selection}> 
            <option className={styles.option}>capentry</option>
            <option className={styles.option}>Tailoring</option>
            <option className={styles.option}>Painter</option>
          </select>

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="********"
          />
          <div className={styles.actions}>
            <button type="button" className={styles.createAccount}>
              Already have an account 
            </button>
            <button type="submit" className={styles.signIn}>
              Sign up
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
