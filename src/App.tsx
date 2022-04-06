import React, { FC } from "react";
import Content from "./layouts/Content";
import Sidebar from "./layouts/Sidebar";
import StoreProvider from "./contexts/StoreContext";

import styles from "./App.module.css";

const App: FC = () => {
  return (
      <StoreProvider>
        <div className={styles.app}>
          <Sidebar />
          <Content />
        </div>
      </StoreProvider>
  );
};

export default App;
