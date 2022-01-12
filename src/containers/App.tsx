import React from "react";
import { BrowserRouter } from "react-router-dom";

import CV from "./CV";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <CV />
      </div>
    </BrowserRouter>
  );
};

export default App;
