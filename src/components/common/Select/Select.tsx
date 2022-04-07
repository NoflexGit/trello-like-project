import React, { FC, SelectHTMLAttributes, SyntheticEvent } from 'react';
import styles from './Select.module.css';
import cx from 'classnames';

interface IProps extends SelectHTMLAttributes<any> {
  options: Array<{ value: string; text: string }>;
  className?: string;
  onChange: (e: SyntheticEvent<HTMLSelectElement>) => void;
  label?: string;
}

const Select: FC<IProps> = ({ options, onChange, label, className, ...restProps }) => {
  return (
    <div className={cx(styles.selectWrapper, className)}>
      {label && <label className={styles.label} htmlFor={restProps.name}>{label}</label>}
      <select onChange={onChange} className={styles.select}>
        {options.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
