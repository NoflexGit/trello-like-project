import React, { FC, useCallback, useMemo, useState } from 'react';
import Button from '../common/Button';
import useModal from '../../hooks/useModal';
import Modal from '../common/Modal';
import { editCard } from '../../contexts/actions';
import useStore from '../../hooks/useStore';
import Select from '../common/Select';

interface IProps {
  id: string;
}

const MoveCard: FC<IProps> = ({ id }) => {
  const { state, dispatch } = useStore();
  const { isOpen, handleOpen, handleClose } = useModal();
  const { columns, activeBoard, cards } = state;
  const [targetColumn, setTargetColumn] = useState('');

  const columnsSelectOptions = useMemo(() => {
    const sameBoardColumns = Object.keys(columns).filter(
      (key) => columns[key].board === activeBoard && key !== cards[id].column,
    );

    const result = sameBoardColumns.map((key) => {
      return { value: key, text: columns[key].title };
    });

    return [{ value: '', text: 'Select column' }, ...result];
  }, [activeBoard, columns, cards, id]);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setTargetColumn(value);
  }, []);

  const handleSave = useCallback(() => {
    editCard(dispatch, state.cards, id, { column: targetColumn });
    setTargetColumn('');
  }, [dispatch, id, state.cards, targetColumn]);

  return (
    <>
      <Button size="small" onClick={handleOpen}>
        Move
      </Button>
      <Modal isOpen={isOpen} handleHide={handleClose} title="Move card" handleSubmit={handleSave}>
        <Select
          options={columnsSelectOptions}
          onChange={handleChange}
          value={targetColumn}
          label="Select a column"
        />
      </Modal>
    </>
  );
};

export default MoveCard;
