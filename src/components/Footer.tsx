import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.scss";

interface SocialNetworkProps {
  icon: IconProp;
  href: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({ icon, href }) => (
  <a
    className={styles.SocialNetwork}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <div className={styles.Container}>
      <div>
        <SocialNetwork
          icon={faLinkedin}
          href="https://www.linkedin.com/in/thibaud-larivi%C3%A8re-0451655b/"
        />
        <SocialNetwork icon={faGithub} href="https://github.com/tlariviere" />
        <p>&copy; {new Date().getFullYear()} Thibaud Larivière</p>
      </div>
    </div>
  </footer>
);

export default Footer;
