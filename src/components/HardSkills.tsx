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
              React Native
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              React
            </Skill>
            <Skill color={Color.Cyan} size={Size.Small}>
              Node.js
            </Skill>
            <Skill color={Color.Orange} size={Size.Medium}>
              Apollo
            </Skill>
            <Skill color={Color.Purple} size={Size.Small}>
              MongoDB
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              PostgreSQL
            </Skill>
            <Skill color={Color.Blue} size={Size.Small}>
              Express
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              Typescript
            </Skill>
            <Skill color={Color.Cyan} size={Size.Small}>
              SCSS
            </Skill>
            <Skill color={Color.Red} size={Size.Large}>
              GraphQL
            </Skill>
            <Skill color={Color.Purple} size={Size.Small}>
              Webpack
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              Bootstrap
            </Skill>
          </div>
        </div>
        <div className={styles.Category}>
          <img src={soft} alt="" />
          <h4>Logiciel</h4>
          <div>
            <Skill color={Color.Purple} size={Size.Large}>
              Rust
            </Skill>
            <Skill color={Color.Blue} size={Size.Medium}>
              C++17
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
            <Skill color={Color.Purple} size={Size.Small}>
              Jest
            </Skill>
            <Skill color={Color.Cyan} size={Size.Medium}>
              Detox
            </Skill>
            <Skill color={Color.Orange} size={Size.Small}>
              Playwright
            </Skill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
