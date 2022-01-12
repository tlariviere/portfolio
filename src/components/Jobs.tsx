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
        <h4>{title}</h4>
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
        <p className={styles.Skills}>{skills.join(", ")}.</p>
        <p>{children}</p>
      </div>
    </>
  );
};

const Jobs: React.FC = () => {
  return (
    <section className={styles.Jobs}>
      <h3>Expériences professionnelles</h3>
      <div>
        <Job
          image={effidence}
          alt="effidence"
          title="Développeur polyvalent"
          skills={[
            "Js ES6",
            "Node.js",
            "Express",
            "AngularJS",
            "C++17",
            "Rust",
            "Stm32",
            "Qt5/QML",
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
          title="Développeur simulation numérique"
          skills={["C++11", "Git", "JIRA"]}
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
