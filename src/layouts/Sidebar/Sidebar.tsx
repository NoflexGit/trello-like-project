import React, { FC } from "react";
import Logo from "../../components/Logo";
import styles from "./Sidebar.module.css";
import BoardsList from "../../components/BoardsList";

interface IProps {}

const Sidebar: FC<IProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.wrapper}>
        <Logo />
        <div className={styles.boardsList}></div>
        <BoardsList />
      </section>
    </aside>
  );
};

export default Sidebar;
