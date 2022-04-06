import React, { FC } from "react";

import styles from "./Content.module.css";
import Column from "../../components/Column";
import Button from "../../components/common/Button";

interface IProps {}

const Content: FC<IProps> = () => {
  return (
    <main className={styles.content}>
      <div className={styles.title}>Test title</div>
      <section className={styles.columns}>
        <section className={styles.columnsWrapper}>
          <Column className={styles.column} />
          <div className={styles.newColumn}>
            <Button>Add new column</Button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Content;
