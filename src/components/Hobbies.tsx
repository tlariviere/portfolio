import React from "react";

import styles from "./Hobbies.module.scss";
import muscu from "../assets/muscu.svg";
import rando from "../assets/rando.svg";
import autonomie from "../assets/autonomie.svg";
import litterature from "../assets/litterature.svg";

const Hobby: React.FC<{ image: string; caption: string }> = ({
  image,
  caption,
}) => {
  return (
    <figure>
      <img src={image} alt="" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

const Hobbies: React.FC = () => {
  return (
    <section className={styles.Hobbies}>
      <h2>Centres d&apos;interêt</h2>
      <div>
        <Hobby image={muscu} caption="Musculation" />
        <Hobby image={rando} caption="Randonnée" />
        <Hobby image={autonomie} caption="Autonomie" />
        <Hobby image={litterature} caption="Litterature" />
      </div>
    </section>
  );
};

export default Hobbies;
