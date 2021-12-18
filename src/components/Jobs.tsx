import React from "react";

import styles from "./Jobs.module.scss";
import effidence from "../assets/effidence.jpeg";
import mentorGraphics from "../assets/mentor-graphics.svg";
import atmosky from "../assets/atmosky.png";

interface JobProps {
  image: string;
  alt: string;
  title: string;
  skills: string[];
  location: string;
  dateStart: Date;
  dateEnd?: Date;
}

const Job: React.FC<JobProps> = ({
  children,
  image,
  alt,
  title,
  skills,
  location,
  dateStart,
  dateEnd,
}) => {
  const dateOptions = { year: "numeric", month: "short" } as const;
  const durationDate = new Date(
    (dateEnd ? dateEnd.getTime() : Date.now()) - dateStart.getTime()
  );
  const durationYear = durationDate.getFullYear() - 1970;
  const durationMonths = durationDate.getMonth() + 1;
  const durationYearDisplayString =
    durationYear > 0
      ? durationYear > 1
        ? `${durationYear} ans`
        : `${durationYear} an`
      : null;
  return (
    <>
      <div>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.Job}>
        <h3>{title}</h3>
        <p>{skills.join(", ")}.</p>
        <p>{children}</p>
        <p>
          <span>{location}</span>
          <span>
            {dateStart.toLocaleDateString("fr-FR", dateOptions)} -{" "}
            {dateEnd
              ? dateEnd.toLocaleDateString("fr-FR", dateOptions)
              : "Aujourd'hui"}
          </span>
          <span>
            {durationYearDisplayString && `${durationYearDisplayString} et `}
            {`${durationMonths} mois`}
          </span>
        </p>
      </div>
    </>
  );
};

const Jobs: React.FC = () => {
  return (
    <section className={styles.Jobs}>
      <h2>Expériences professionnelles</h2>
      <div>
        <Job
          image={effidence}
          alt="effidence"
          title="Ingénieur de développement"
          skills={[
            "C++17",
            "Rust",
            "Js ES6",
            "Stm32",
            "Qt5/QML",
            "Node.js",
            "Express",
            "AngularJS",
            "Gitlab",
          ]}
          location="Clermont-Ferrand"
          dateStart={new Date(2019, 10)}
        >
          Développements front &amp; back end pour robots de transport en
          logistique ou industries.
        </Job>
        <Job
          image={mentorGraphics}
          alt="mentor-graphics"
          title="Ingénieur de développement"
          skills={["C++11", "Git", "JIRA", "Simulation numérique"]}
          location="Grenoble"
          dateStart={new Date(2018, 4)}
          dateEnd={new Date(2019, 9)}
        >
          Développement d&apos;un simulateur de circuits éléctroniques.
        </Job>
        <Job
          image={atmosky}
          alt="atmosky"
          title="Stage de fin d'études"
          skills={[
            "C++",
            "Réseau de neurones artificiels",
            "Code de calcul météorologique (WRF)",
          ]}
          location="Bordeaux"
          dateStart={new Date(2018, 2)}
          dateEnd={new Date(2018, 7)}
        >
          Prévision de la production d&apos;un parc photovoltaïque.
        </Job>
      </div>
    </section>
  );
};

export default Jobs;
