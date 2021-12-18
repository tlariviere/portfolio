import React from "react";

import styles from "./Skills.module.scss";
import www from "../assets/www.png";
import soft from "../assets/soft.png";
import misc from "../assets/misc.png";

const Skills: React.FC = () => {
  return (
    <section className={styles.Skills}>
      <h2>Compétences</h2>
      <div>
        <div className={styles.Category}>
          <img src={www} alt="" />
          <h3>Web</h3>
          <div>
            <p className={styles.SubCatLabel}>Back-end</p>
            <p>Node.js, Express, MongoDB, MySQL, GraphQL</p>
            <p className={styles.SubCatLabel}>Front-end</p>
            <p>React, React-Redux, Bootstrap</p>
            <p>Javascript ES6/ESNext, Jest, Webpack</p>
          </div>
        </div>
        <div className={styles.Category}>
          <img src={soft} alt="" />
          <h3>Logiciel</h3>
          <p>C++17, Rust, Qt5, QML</p>
        </div>
        <div className={styles.Category}>
          <img src={misc} alt="" />
          <h3>Divers</h3>
          <div>
            <p className={styles.SubCatLabel}>Outils</p>
            <p>Docker, Git, GitLab, GitHub, JIRA</p>
            <p className={styles.SubCatLabel}>Maths</p>
            <p>Simulation numérique</p>
            <p className={styles.SubCatLabel}>Anglais</p>
            <p>Courant (TOEIC: 900), stage de 4 mois en Angleterre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
