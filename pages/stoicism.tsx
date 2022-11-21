import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StoicismDef from "../components/StoicismDef";


export default function Stoicism() {
  return (
    <>
      <Head>
        <title>Pahpotis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/pahpotis.svg" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.heroContainer}>
          <StoicismDef />
        </div>
      </main>
    </>
  );
}