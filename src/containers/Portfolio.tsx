import React from "react";

import Card from "../components/Card";
import styles from "./Portfolio.module.scss";
import loginApp from "../assets/login-app.png";
import omdbApp from "../assets/omdb-app.png";

const LoginApp = () => (
  <Card
    image={loginApp}
    title="Login App"
    demoUrl="https://tlariviere-login-app.herokuapp.com"
    repoUrl="https://github.com/tlariviere/login"
  >
    Bibliothèque typescript de gestion sécurisée d&apos;utilisateurs basée sur
    les Json Web Tokens, et application d&apos;exemple avec React et MongoDB.
  </Card>
);

const OmdbApp = () => (
  <Card
    image={omdbApp}
    title="OMDb App"
    demoUrl="https://tlariviere-omdb-app.herokuapp.com"
    repoUrl="https://github.com/tlariviere/omdb-app"
  >
    Une application de recherche de films et séries réalisée en React. Les
    données renvoyées par l&apos;API OMDb sont mise en cache côté serveur.
  </Card>
);

const Portfolio: React.FC = () => {
  return (
    <article id="portfolio" className={styles.Portfolio}>
      <div className={styles.Container}>
        <h1>Mes projets</h1>
        <div>
          <LoginApp />
          <OmdbApp />
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
