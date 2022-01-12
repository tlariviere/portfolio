import React from "react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Container}>
        <div>
          <a href="#portfolio">Portfolio</a>
          <a href="#cv">CV</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
