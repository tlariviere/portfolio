import React from "react";

import styles from "./Jobs.module.scss";
import effidence from "../assets/effidence.jpeg";
import mentorGraphics from "../assets/mentor-graphics.svg";
import agroleague from "../assets/agroleague.jpeg";

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
          image={agroleague}
          alt="agroleague"
          title="Développeur fullstack"
          skills={[
            "React Native",
            "React",
            "GraphQL",
            "Apollo",
            "Node.js",
            "Typescript",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "Heroku",
            "Github",
          ]}
          location="Paris (full-remote)"
          dateStart={new Date(2022, 5)}
        >
          Développement mobile, web et back-end pour le conseil en agronomie.
        </Job>

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
          dateEnd={new Date(2022, 4)}
        >
          Développement web, logiciel et embarqué pour robots de transport en
          logistique.
        </Job>

        <Job
          image={mentorGraphics}
          alt="mentor-graphics"
          title="Développeur simulation numérique"
          skills={["C++11", "Git"]}
          location="Grenoble"
          dateStart={new Date(2018, 4)}
          dateEnd={new Date(2019, 9)}
        >
          Développement d&apos;un simulateur de circuits éléctroniques.
        </Job>
      </div>
    </section>
  );
};

export default Jobs;
