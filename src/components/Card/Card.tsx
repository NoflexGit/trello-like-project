import React, { FC, useCallback, useRef, useState } from "react";
import cx from "classnames";
import styles from "./Card.module.css";
import IconButton from "../common/IconButton";
import { ReactComponent as DotsSvg } from "../../assets/icons/dots.svg";
import useOnClickOutside from "../../hooks/useClickOutside";
import EditCard from "../EditCard";
import MoveCard from "../MoveCard";

interface IProps {
  className?: string;
  content: string;
  title?: string;
  id: string
}


const Card: FC<IProps> = ({ content, className, title, id }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => setIsMenuVisible(false));
  
  const toggleMenu = useCallback(() => {
    setIsMenuVisible(!isMenuVisible);
  }, [isMenuVisible]);

  const cardClasses = cx(styles.card, className, {
    [`${styles.isVisible}`]: isMenuVisible,
  });

  return (
    <article className={cardClasses}>
      <div className={styles.contentOverlay} />
      <div ref={menuRef} className={styles.menu}>
        <EditCard title={title} content={content} id={id}/>
        <MoveCard id={id} />
      </div>
      <div className={styles.menuToggle}>
        <IconButton icon={<DotsSvg />} onClick={toggleMenu} />
      </div>
      <div className={styles.content}>
        {title && <header className={styles.header}>{title}</header>}
        <p className={styles.text}>{content}</p>
      </div>
      
    </article>
  );
};

export default Card;
