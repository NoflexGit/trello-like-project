import React, { FC, useCallback, useState } from 'react';
import styles from './EditCard.module.css';
import Button from '../common/Button';
import useModal from '../../hooks/useModal';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import { editCard } from '../../contexts/actions';
import useStore from "../../hooks/useStore";

interface IProps {
  content?: string;
  title?: string;
  id: string
}

const EditCard: FC<IProps> = ({ content = '', title= '', id }) => {
  const { state, dispatch } = useStore();
  const { isOpen, handleOpen, handleClose } = useModal();
  const [values, setValues] = useState({ content, title });

  const handleChangeValue = useCallback(
    ({ target: { name, value } }) => {
      setValues({ ...values, [name]: value });
    },
    [values],
  );
  
  const handleSave = useCallback(
      () => {
        editCard(dispatch, state.cards, id, values)
      },
      [dispatch, values, id, state.cards],
  );

  return (
    <>
      <Button size="small" onClick={handleOpen}>
        Edit
      </Button>
      <Modal isOpen={isOpen} handleHide={handleClose} handleSubmit={handleSave} title="Edit card">
        <Input
          name="title"
          placeholder="Specify the title"
          label="Title"
          className={styles.titleInput}
          maxLength={50}
          onChange={handleChangeValue}
          value={values.title}
        />
        <Textarea
          name="content"
          placeholder="Specify the description"
          label="Description"
          onChange={handleChangeValue}
          value={values.content}
        />
      </Modal>
    </>
  );
};

export default EditCard;
