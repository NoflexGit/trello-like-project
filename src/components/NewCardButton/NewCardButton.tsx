import React, {FC, useCallback, useState} from 'react';
import styles from './NewCardButton.module.css';
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Modal from "../common/Modal";
import Button from "../common/Button";
import {addCard} from "../../contexts/actions";
import useStore from "../../hooks/useStore";

interface IProps {
  id: string;
}

const cardInititalState = {
  name: '',
  content: '',
}

const NewCardButton: FC<IProps> = ({id}) => {
  const { state, dispatch } = useStore();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCard, setNewCard] = useState(cardInititalState);
  const { cards }  = state;
  
  const handleChangeValue = useCallback(
      ({ target: { name, value } }) => {
        setNewCard({ ...newCard, [name]: value });
      },
      [newCard],
  );
  
  const createCard = useCallback(() => {
    addCard(dispatch, cards, id, newCard.name, newCard.content);
    setNewCard(cardInititalState)
  }, [dispatch, cards, id, newCard]);
  
  const openAddModal = useCallback(() => {
    setIsAddOpen(true);
  }, [setIsAddOpen]);
  
  const closeAddModal = useCallback(() => {
    setIsAddOpen(false);
  }, [setIsAddOpen]);
  
  return (
      <>
        <div className={styles.button} onClick={openAddModal}>
          <Button view="transparent">Add new card</Button>
        </div>
        <Modal
            isOpen={isAddOpen}
            handleHide={closeAddModal}
            handleSubmit={createCard}
            title="Add new card">
          <Input
              name="name"
              placeholder="Specify the title"
              label="Title"
              className={styles.titleInput}
              maxLength={50}
              onChange={handleChangeValue}
          />
          <Textarea
              name="content"
              placeholder="Specify the description"
              label="Description"
              onChange={handleChangeValue}
          />
        </Modal>
      </>
   
  );
};

export default NewCardButton;
