import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const StoicismDef: React.FunctionComponent = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTextDef}>
          <h1>Stoicism:</h1>
          <p>
            {/* describe stoicism */}
            Stoicism is a school of Hellenistic philosophy founded in Athens by
            Zeno of Citium in the early 3rd century BC. Stoicism is primarily a
            system of ethics which is informed by its system of logic and its
            views on the natural world.
            <span className={styles.CompleteDef}>
              <br />
              Among other things, the Stoics taught that virtue is the only
              good; that all events are determined by fate; that the proper
              course for a human being is to accept calmly and unresistingly
              whatever may happen; and that the proper course for a sage is to
              live in agreement with nature.
            </span>
          </p>
          <span>According to OpenAi !</span>
        </div>
      </section>
    </>
  );
};

export default StoicismDef;
