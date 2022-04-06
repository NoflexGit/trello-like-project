import React, { FC, useCallback } from "react";
import ReactDOM from "react-dom";
import Button from "../../common/Button";
import styles from "./Modal.module.css";

interface IProps {
  isOpen: boolean;
  handleHide: () => void;
  handleSubmit: () => void;
  title?: string;
  submitDisabled?: boolean;
}

const Modal: FC<IProps> = ({
  title,
  children,
  isOpen,
  handleHide,
  handleSubmit,
  submitDisabled,
}) => {
  const handleSaveButton = useCallback(() => {
    if (typeof handleSubmit === "function" && !submitDisabled) {
      handleSubmit();
      handleHide();
    }
  }, [handleSubmit, handleHide, submitDisabled]);

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={handleHide} />
        <div className={styles.content} aria-modal aria-hidden role="dialog">
          {title && <h3 className={styles.title}>{title}</h3>}
          {children}
          <div className={styles.footerWrapper}>
            <div className={styles.footer}>
              <Button
                view="danger"
                className={styles.closeButton}
                onClick={handleHide}
              >
                Close
              </Button>
              <Button onClick={handleSaveButton} disabled={submitDisabled}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

export default Modal;
