import React from "react";
import styles from "./NavbarStyles.module.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles.h1}>
        <h1>My Blog</h1>
      </Link>
      <ul className={styles.navMenu}>
        <li>
          <Link to="/" className={styles.a}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/posts" className={styles.a}>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.a}>
            About
          </Link>
        </li>
        <li>
          <Link to="/photos" className={styles.a}>
            Photos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
