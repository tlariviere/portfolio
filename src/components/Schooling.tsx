import React from "react";

import styles from "./Schooling.module.scss";
import enseirb from "../assets/enseirb-matmeca.png";
import uvsq from "../assets/uvsq.png";
import iutOrsay from "../assets/iut-orsay.png";

interface SchoolProps {
  image: string;
  title: string;
  location: string;
  dates: string;
  specialism?: string;
  description?: string;
}

const School: React.FC<SchoolProps> = ({
  image,
  title,
  location,
  dates,
  specialism,
  description,
}) => {
  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={styles.School}>
        <h3>{title}</h3>
        {specialism && <p>Spécialité {specialism}</p>}
        {description && <p>{description}</p>}
        <p>{location}</p>
        <p>{dates}</p>
      </div>
    </>
  );
};

const Schooling: React.FC = () => {
  return (
    <section className={styles.Schooling}>
      <h2>Formation</h2>
      <div>
        <School
          image={enseirb}
          title="Enseirb-Matmeca"
          location="Bordeaux INP"
          dates="2014 - 2017"
          specialism="calcul haute performance"
          description="Modélisation mathématique, Calcul scientifique"
        />
        <School
          image={uvsq}
          title="Licence mathématiques"
          location="Université Versailles-Saint-Quentin"
          dates="2013 - 2014"
        />
        <School
          image={iutOrsay}
          title="DUT Informatique"
          location="Université d'Orsay (Paris 11)"
          dates="2011 - 2013"
        />
      </div>
    </section>
  );
};

export default Schooling;
