import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAt,
  faMapMarkerAlt,
  faLaptopHouse,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Profile.module.scss";
import profil from "../assets/profil.jpeg";

const Picture = () => {
  return (
    <div className={styles.Picture}>
      <img src={profil} alt="" />
    </div>
  );
};

interface SocialNetworkProps {
  icon: IconProp;
  href: string;
  prefix: string;
  type: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  icon,
  href,
  prefix,
  type,
}) => (
  <>
    <FontAwesomeIcon icon={icon} fixedWidth />
    <p>
      {prefix}{" "}
      <a href={href} target="_blank" rel="noreferrer">
        {type} <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    </p>
  </>
);

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h3>Contact</h3>
      <div>
        <FontAwesomeIcon icon={faPhone} fixedWidth />
        <p>06 49 81 30 14</p>
        <FontAwesomeIcon icon={faAt} fixedWidth />
        <p>lariviere.thibaud@gmail.com</p>
        <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
        <p>Région Clermont-Ferrand</p>
        <SocialNetwork
          icon={faLinkedin}
          href="https://www.linkedin.com/in/thibaud-lariviere/"
          prefix="Mon profil"
          type="linkedin"
        />
        <SocialNetwork
          icon={faGithub}
          href="https://github.com/tlariviere"
          prefix="Ma page"
          type="github"
        />
        <FontAwesomeIcon icon={faLaptopHouse} fixedWidth />
        <p>Télétravail</p>
      </div>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <section className={styles.Profile}>
      <Picture />
      <Contact />
    </section>
  );
};

export default Profile;
