import React, { FC } from "react";
import cx from "classnames";
import styles from "./Input.module.css";

interface IProps extends React.InputHTMLAttributes<any> {
  label?: string;
}

const Input: FC<IProps> = ({ label, className, ...restProps }) => {
  return (
    <div className={cx(styles.inputWrapper, className)}>
      {label && (
        <label className={styles.label} htmlFor={restProps.name}>
          {label}
        </label>
      )}
      <input className={styles.input} {...restProps} />
    </div>
  );
};

export default Input;
