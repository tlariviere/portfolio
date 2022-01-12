import React from "react";
import { Link } from "react-router-dom";

import styles from "./CV.module.scss";
import Profile from "../components/Profile";
import Jobs from "../components/Jobs";
import HardSkills from "../components/HardSkills";
import Schooling from "../components/Schooling";
import SoftSkills from "../components/SoftSkills";
import Languages from "../components/Languages";

const MainTitle = () => {
  return (
    <div className={styles.MainTitle}>
      <section>
        <h1>Thibaud Lariviere</h1>
        <h2>Développeur fullstack</h2>
      </section>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className={styles.MainBody}>
      <Jobs />
      <HardSkills />
      <Schooling />
    </div>
  );
};

const DownloadCV = () => {
  return (
    <Link
      className={styles.DownloadCV}
      to="/Thibaud_Lariviere-CV.pdf"
      target="_blank"
      download
    >
      Télécharger mon CV
    </Link>
  );
};

const CV: React.FC = () => {
  return (
    <article id="cv" className={styles.CV}>
      <div className={styles.Container}>
        <h1>&Agrave; propos</h1>
        <div>
          <MainTitle />
          <div className={styles.SidePane}>
            <Profile />
          </div>
          <MainBody />
          <div className={styles.SidePane}>
            <Languages />
            <SoftSkills />
          </div>
        </div>
        <DownloadCV />
      </div>
    </article>
  );
};

export default CV;
