import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
        <div className={styles.circle}></div>
        <h2>Sign in</h2>
        </div>
        <div className={styles.formsAndtitle}>
           <div className={styles.header}>
          <h1 className={styles.title}>
            Sign in to <br /> <span className={styles.brand}>SkillSwap</span>
          </h1>
        </div>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="johndoe@gmail.com"
          />
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
              Create new account
            </button>
            <button type="submit" className={styles.signIn}>
              Sign in
            </button>
          </div>
        </form>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
