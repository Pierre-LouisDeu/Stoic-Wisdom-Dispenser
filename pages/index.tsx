import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
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
          <Hero />
        </div>
      </main>
    </>
  );
}
