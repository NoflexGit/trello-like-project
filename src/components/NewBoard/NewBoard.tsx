import React, { FC, useCallback, useState } from 'react';
import { addBoard } from '../../contexts/actions';
import { ReactComponent as SmallPlusSvg } from '../../assets/icons/small-plus.svg';
import IconButton from '../common/IconButton';
import Modal from '../common/Modal';
import Input from '../common/Input';
import useStore from '../../hooks/useStore';

interface IProps {}

const NewBoard: FC<IProps> = () => {
  const { state, dispatch } = useStore();
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [newBoardName, setNewBoardName] = useState<string>('');

  const openAddModal = useCallback(() => {
    setIsAddOpen(true);
  }, []);

  const closeAddModal = useCallback(() => {
    setIsAddOpen(false);
    setNewBoardName('');
  }, []);

  const handleCreateNewBoard = useCallback(() => {
    addBoard(state.boards, dispatch, newBoardName);
    setNewBoardName('');
  }, [state.boards, newBoardName, dispatch]);

  const handleNameInputChange = useCallback((e) => {
    setNewBoardName(e.target.value);
  }, []);
  return (
    <>
      <IconButton onClick={openAddModal} icon={<SmallPlusSvg />} />
      <Modal
        isOpen={isAddOpen}
        handleHide={closeAddModal}
        handleSubmit={handleCreateNewBoard}
        title="Create new board"
        submitDisabled={newBoardName === ''}>
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

export default NewBoard;
