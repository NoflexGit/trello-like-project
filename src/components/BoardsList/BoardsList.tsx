import React, { FC, useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import styles from "./BoardsList.module.css";
import cx from "classnames";
import { ReactComponent as SmallPlusSvg } from "../../assets/icons/small-plus.svg";
import IconButton from "../common/IconButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "../common/Modal";
import Input from "../common/Input";

interface IProps {}

const BoardsList: FC<IProps> = () => {
  const [boards, setBoards] = useLocalStorage<IBoardData>("boards", {});
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [newBoardName, setNewBoardName] = useState<string>("");
  const [activeBoard, setActiveBoard] = useState<string | null>(null);

  useEffect(() => {
    const keys = Object.keys(boards);
    if (keys.length > 0) {
      if (!activeBoard) {
        setActiveBoard(keys[0]);
      }
    }
  }, [boards, activeBoard]);

  const openAddModal = useCallback(() => {
    setIsAddOpen(true);
  }, []);

  const closeAddModal = useCallback(() => {
    setIsAddOpen(false);
    setNewBoardName("");
  }, []);

  const handleCreateNewBoard = useCallback(() => {
    const id = nanoid(8);
    boards[id] = {
      title: newBoardName,
      columns: [],
    };
    setBoards(boards);
    setNewBoardName("");
  }, [newBoardName, boards, setBoards]);

  const handleNameInputChange = useCallback((e) => {
    setNewBoardName(e.target.value);
  }, []);

  return (
    <>
      <div className={styles.title}>
        Your boards
        <IconButton onClick={openAddModal} icon={<SmallPlusSvg />} />
      </div>
      <ul className={styles.items}>
        {Object.keys(boards).map((key) => (
          <li
            onClick={() => setActiveBoard(key)}
            key={key}
            className={cx(
              styles.item,
              activeBoard === key && styles.itemActive
            )}
          >
            {boards[key].title}
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isAddOpen}
        handleHide={closeAddModal}
        handleSubmit={handleCreateNewBoard}
        title="Create new board"
        submitDisabled={newBoardName === ""}
      >
        <Input
          label="Name"
          placeholder="Enter board name"
          value={newBoardName}
          onChange={handleNameInputChange}
        />
      </Modal>
    </>
  );
};

export default BoardsList;
