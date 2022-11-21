import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <a className={styles.logo}></a>
        <ul>
          <li>
            <Link
              className={styles.hoverUnderlineAnimation}
              href="/"
            >
              Quotes
            </Link>
          </li>
          <li>
            <Link
              className={styles.hoverUnderlineAnimation}
              href="/stoicism"
            >
              Stoicism
            </Link>
          </li>
          <li>
            <Link
              className={styles.hoverUnderlineAnimation}
              href="/team"
            >
              The team
            </Link>
          </li>
          <Link
            className={styles.buttonPrimary}
            href="https://github.com/Pierre-LouisDeu/Stoic-Wisdom-Dispenser"
          >
            Ghitub repos
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
