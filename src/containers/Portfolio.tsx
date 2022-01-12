import React from "react";

import Card from "../components/Card";
import styles from "./Portfolio.module.scss";
import loginApp from "../assets/login-app.png";
import underConstruction from "../assets/under-construction.png";

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

const DatingApp = () => (
  <Card image={underConstruction} title="Bientôt : Dating App">
    Une application de rencontre réalisée en React. En construction pour le
    moment.
  </Card>
);

const Portfolio: React.FC = () => {
  return (
    <article id="portfolio" className={styles.Portfolio}>
      <div className={styles.Container}>
        <h1>Mes projets</h1>
        <div>
          <LoginApp />
          <DatingApp />
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
