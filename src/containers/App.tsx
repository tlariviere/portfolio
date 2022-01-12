import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Portfolio from "./Portfolio";
import CV from "./CV";
import Footer from "../components/Footer";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Portfolio />
        <CV />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
