import React, { FC } from "react";
import styles from "./Textarea.module.css";

interface IProps extends React.TextareaHTMLAttributes<any> {
  label?: string;
}

const Textarea: FC<IProps> = ({ label, ...restProps }) => {
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label className={styles.label} htmlFor={restProps.name}>
          {label}
        </label>
      )}
      <textarea className={styles.textarea} {...restProps} />
    </div>
  );
};

export default Textarea;
