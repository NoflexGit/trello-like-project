import React, { FC, useCallback, useMemo, useState } from 'react';

import styles from './Content.module.css';
import Column from '../../components/Column';
import Button from '../../components/common/Button';
import useStore from '../../hooks/useStore';
import { addColumn } from '../../contexts/actions';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';

interface IProps {}

const Content: FC<IProps> = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState<string>('');
  const { state, dispatch } = useStore();
  const { boards, activeBoard, columns } = state;
  const title = boards[activeBoard]?.title;

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

  const columnsList = useMemo(() => {
    const result: any[] = [];
    Object.keys(columns).forEach((key) => {
      if (columns[key].board === activeBoard) {
        // @ts-ignore
        result.push({...columns[key], id: key});
      }
    });
    return result;
  }, [activeBoard, columns]);

  return (
    <main className={styles.content}>
      <div className={styles.title}>{title}</div>
      <section className={styles.columns}>
        <section className={styles.columnsWrapper}>
          {columnsList.map((column) => (
            <Column title={column.title} key={column.id} id={column.id} className={styles.column} />
          ))}
          <div className={styles.newColumn}>
            <Button onClick={openAddModal}>Add new column</Button>
          </div>
        </section>
      </section>
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
    </main>
  );
};

export default Content;
