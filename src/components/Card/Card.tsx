import React, { FC, useCallback, useRef, useState } from "react";
import cx from "classnames";
import styles from "./Card.module.css";
import Modal from "../common/Modal";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import Textarea from "../common/Textarea";
import { ReactComponent as DotsSvg } from "../../assets/icons/dots.svg";
import useOnClickOutside from "../../hooks/useClickOutside";

interface IProps {
  className?: string;
  content: string;
  title?: string;
}

const Card: FC<IProps> = ({ content, className, title }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isMoveOpen, setIsMoveOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));

  const openEditModal = useCallback(() => {
    setIsEditOpen(true);
  }, []);

  const closeEditModal = useCallback(() => {
    setIsEditOpen(false);
  }, []);

  const openMoveModal = useCallback(() => {
    setIsMoveOpen(true);
  }, []);

  const closeMoveModal = useCallback(() => {
    setIsMoveOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuVisible(!isMenuVisible);
  }, [isMenuVisible]);

  const cardClasses = cx(styles.card, className, {
    [`${styles.isVisible}`]: isMenuVisible,
  });

  return (
    <article className={cardClasses}>
      <div ref={menuRef} className={styles.menu}>
        <Button size="small" onClick={openEditModal}>
          Edit
        </Button>
        <Button size="small" onClick={openMoveModal}>
          Move
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.contentOverlay} />
        <div className={styles.menuToggle}>
          <IconButton icon={<DotsSvg />} onClick={toggleMenu} />
        </div>
        {title && <header className={styles.header}>{title}</header>}
        <p className={styles.text}>{content}</p>
      </div>
      <Modal
        isOpen={isEditOpen}
        handleHide={closeEditModal}
        handleSubmit={() => {}}
        title="Edit card"
      >
        <Textarea />
      </Modal>
      <Modal
        isOpen={isMoveOpen}
        handleHide={closeMoveModal}
        handleSubmit={() => {}}
        title="Move card"
      >
        123123
      </Modal>
    </article>
  );
};

export default Card;
