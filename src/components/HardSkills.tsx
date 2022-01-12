import React from "react";

import styles from "./HardSkills.module.scss";
import www from "../assets/www.svg";
import soft from "../assets/soft.svg";
import tools from "../assets/tools.svg";

enum Color {
  Blue,
  Red,
  Cyan,
  Orange,
  Purple,
}

enum Size {
  Small,
  Medium,
  Large,
}

const Skill: React.FC<{ color: Color; size: Size }> = ({
  color,
  size,
  children,
}) => {
  return (
    <p
      className={`${styles.Skill} ${styles[Color[color]]} ${
        styles[Size[size]]
      }`}
    >
      {children}
    </p>
  );
};

const HardSkills: React.FC = () => {
  return (
    <section className={styles.HardSkills}>
      <h3>Compétences</h3>
      <div>
        <div className={styles.Category}>
          <img src={www} alt="" />
          <h4>Web</h4>
          <div>
            <Skill color={Color.Blue} size={Size.Large}>
              React
            </Skill>
            <Skill color={Color.Red} size={Size.Small}>
              Node.js
            </Skill>
            <Skill color={Color.Cyan} size={Size.Large}>
              Express
            </Skill>
            <Skill color={Color.Orange} size={Size.Medium}>
              MongoDB
            </Skill>
            <Skill color={Color.Purple} size={Size.Small}>
              MySQL
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              Javascript ESNext
            </Skill>
            <Skill color={Color.Blue} size={Size.Medium}>
              Typescript
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              SCSS
            </Skill>
            <Skill color={Color.Cyan} size={Size.Medium}>
              Bootstrap
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              Jest
            </Skill>
            <Skill color={Color.Purple} size={Size.Medium}>
              Webpack
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              React-Redux
            </Skill>
          </div>
        </div>
        <div className={styles.Category}>
          <img src={soft} alt="" />
          <h4>Logiciel</h4>
          <div>
            <Skill color={Color.Purple} size={Size.Large}>
              C++17
            </Skill>
            <Skill color={Color.Blue} size={Size.Medium}>
              Rust
            </Skill>
            <Skill color={Color.Orange} size={Size.Medium}>
              Qt5
            </Skill>
            <Skill color={Color.Red} size={Size.Small}>
              QML
            </Skill>
          </div>
        </div>
        <div className={styles.Category}>
          <img src={tools} alt="" />
          <h4>Outils</h4>
          <div>
            <Skill color={Color.Blue} size={Size.Medium}>
              Docker
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              Git
            </Skill>
            <Skill color={Color.Purple} size={Size.Medium}>
              GitLab
            </Skill>
            <Skill color={Color.Cyan} size={Size.Medium}>
              GitHub
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              JIRA
            </Skill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
