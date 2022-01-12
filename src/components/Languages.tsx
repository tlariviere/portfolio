import React from "react";

import styles from "./Languages.module.scss";

const Languages: React.FC = () => {
  return (
    <section className={styles.Languages}>
      <h3>Anglais</h3>
      <ul>
        <li>Courant (TOEIC: 900)</li>
        <li>Stage de 4 mois en Angleterre</li>
      </ul>
    </section>
  );
};

export default Languages;
