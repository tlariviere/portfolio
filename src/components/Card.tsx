import React from "react";

import styles from "./Card.module.scss";

interface CardProps {
  image: string;
  title: string;
  demoUrl?: string;
  repoUrl?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  demoUrl,
  repoUrl,
  children,
}) => {
  return (
    <section className={styles.Card}>
      {demoUrl ? (
        <a href={demoUrl}>
          <img src={image} alt="" />
        </a>
      ) : (
        <img src={image} alt="" />
      )}
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <div>
          {demoUrl && <a href={demoUrl}>Démo Live</a>}
          {repoUrl && <a href={repoUrl}>Dépôt github</a>}
        </div>
      </div>
    </section>
  );
};

export default Card;
