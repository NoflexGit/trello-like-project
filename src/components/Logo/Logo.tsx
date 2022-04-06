import React, { FC } from "react";
import styles from "./Logo.module.css";

interface IProps {}

const Logo: FC<IProps> = () => {
  return <div className={styles.logo}>Boardix</div>;
};

export default Logo;
