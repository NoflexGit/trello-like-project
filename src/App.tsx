import React, { FC } from "react";
import Content from "./layouts/Content";
import Sidebar from "./layouts/Sidebar";

import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
