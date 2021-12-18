import React from "react";

import CV from "./CV";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <CV />
    </div>
  );
};

export default App;
