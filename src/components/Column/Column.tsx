import React, { FC, useCallback, useState } from "react";
import cx from "classnames";

import Card from "../Card";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import styles from "./Column.module.css";

interface IProps {
  className?: string;
}

const Column: FC<IProps> = ({ className }) => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const openAddModal = useCallback(() => {
    setIsAddOpen(true);
  }, [setIsAddOpen]);

  const closeAddModal = useCallback(() => {
    setIsAddOpen(false);
  }, [setIsAddOpen]);

  return (
    <section className={cx(styles.column, className)}>
      <div className={styles.toggleEdit}>
        <IconButton icon={<EditSvg />} />
      </div>
      <header className={styles.title}>Top secret</header>
      <div className={styles.addButton} onClick={openAddModal}>
        <Button view="transparent">Add new card</Button>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Card
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex odio, tempus quis placerat ac, interdum non velit."
            className={styles.card}
          />
          <Card
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex odio, tempus quis placerat ac, interdum non velit."
            className={styles.card}
          />
          <Card
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex odio, tempus quis placerat ac, interdum non velit."
            className={styles.card}
          />
          <Card
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex odio, tempus quis placerat ac, interdum non velit."
            className={styles.card}
          />
        </div>
      </div>
      <Modal
        isOpen={isAddOpen}
        handleHide={closeAddModal}
        handleSubmit={() => {}}
        title="Add new card"
      >
        <Input
          placeholder="Specify the title"
          label="Title"
          className={styles.addNewCardInput}
          maxLength={50}
        />
        <Textarea placeholder="Specify the description" label="Description" />
      </Modal>
    </section>
  );
};

export default Column;
