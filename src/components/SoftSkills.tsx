import React from "react";

import styles from "./SoftSkills.module.scss";

const SoftSkills: React.FC = () => {
  return (
    <section className={styles.SoftSkills}>
      <h3>Personnalité</h3>
      <ul>
        <li>Autonome</li>
        <li>Rigoureux</li>
        <li>Adaptatatif</li>
        <li>Curieux</li>
        <li>Méthodique</li>
        <li>Prospectif</li>
      </ul>
    </section>
  );
};

export default SoftSkills;
