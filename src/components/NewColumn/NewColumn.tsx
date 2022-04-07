import React, { FC, useCallback, useState } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Button from '../common/Button';
import { addColumn } from '../../contexts/actions';
import useStore from '../../hooks/useStore';

const NewColumn: FC = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState<string>('');
  const { state, dispatch } = useStore();

  const createColumn = useCallback(() => {
    addColumn(dispatch, state, newColumnName);
  }, [state, dispatch, newColumnName]);

  const openAddModal = useCallback(() => {
    setIsAddOpen(true);
  }, []);

  const closeAddModal = useCallback(() => {
    setIsAddOpen(false);
    setNewColumnName('');
  }, []);

  const handleChangeInput = useCallback((e) => {
    setNewColumnName(e.target.value);
  }, []);

  return (
    <>
      <Button onClick={openAddModal}>Add new column</Button>
      <Modal
        isOpen={isAddOpen}
        handleHide={closeAddModal}
        handleSubmit={createColumn}
        title="Create new column"
        submitDisabled={newColumnName === ''}>
        <Input
          label="Title"
          placeholder="Enter column title"
          value={newColumnName}
          onChange={handleChangeInput}
        />
      </Modal>
    </>
  );
};

export default NewColumn;
