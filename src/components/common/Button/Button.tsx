import React from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: 'default' | 'action' | 'danger' | 'transparent';
  size?: 'small' | 'medium';
}

const Button: React.FC<IProps> = ({
  type = 'button',
  view = 'default',
  size = 'medium',
  children,
  className,
  disabled,
  ...restProps
}) => {
  const classes = cx(
    styles.button,
    styles[view],
    styles[size],
    disabled && styles.disabled,
    className,
  );

  return (
    <button className={classes} type={type} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
