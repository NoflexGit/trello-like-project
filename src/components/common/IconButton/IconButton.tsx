import React, { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./IconButton.module.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: ReactNode;
}

const IconButton: FC<IProps> = ({ icon, className, ...restProps }) => {
  return (
    <button className={cx(styles.button, className)} {...restProps}>
      {icon}
    </button>
  );
};

export default IconButton;
