import React from "react";

import styles from "./CV.module.scss";
import Profile from "../components/Profile";
import Jobs from "../components/Jobs";
import Skills from "../components/Skills";
import Schooling from "../components/Schooling";
import Hobbies from "../components/Hobbies";

const Main = () => {
  return (
    <div className={styles.Main}>
      <h1>Développeur full-stack React/Express</h1>

      <Jobs />
      <Skills />
      <Schooling />
    </div>
  );
};

const CV: React.FC = () => {
  return (
    <article className={styles.CV}>
      <div className={styles.Container}>
        <h1>Thibaud Lariviere</h1>

        <div>
          <Profile />
          <Main />
          <Hobbies />
        </div>
      </div>
    </article>
  );
};

export default CV;
