import React from "react";

import styles from "./Profile.module.scss";
import profil from "../assets/profil.jpeg";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

const Picture = () => {
  return (
    <div className={styles.Picture}>
      <img src={profil} alt="" />
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h2>Contact</h2>
      <div>
        <img src={address} alt="" />
        <div>
          <p>8 rue de Montrognon</p>
          <p>63540 SAULZET-LE-CHAUD</p>
        </div>
        <img src={phone} alt="" />
        <p>06 49 81 30 14</p>
        <img src={mail} alt="" />
        <p>lariviere.thibaud@gmail.com</p>
        <p>
          {new Date(
            Date.now() - new Date("1993/05/17").getTime()
          ).getFullYear() - 1970}{" "}
          ans, permis B
        </p>
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
