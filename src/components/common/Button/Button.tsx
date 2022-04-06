import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: "default" | "action" | "danger" | "transparent";
  size?: "small" | "medium";
}

const Button: React.FC<IProps> = ({
  type = "button",
  view = "default",
  size = "medium",
  children,
  className,
  ...restProps
}) => {
  const classes = cx(styles.button, styles[view], styles[size], className);

  return (
    <button className={classes} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
