import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <a className={styles.logo}></a>
        <ul>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              Quotes
            </a>
          </li>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              Stoicism
            </a>
          </li>
          <li>
            <a href="#" className={styles.hoverUnderlineAnimation}>
              The Team
            </a>
          </li>
          <li>
            <button className={styles.buttonPrimary}>Ghitub repos</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
