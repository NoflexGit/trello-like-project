import React, { FC, useEffect } from 'react';
import styles from './BoardsList.module.css';
import cx from 'classnames';
import useStore from '../../hooks/useStore';
import { setActiveBoard } from '../../contexts/actions';
import NewBoard from '../NewBoard';

const BoardsList: FC = () => {
  const { state, dispatch } = useStore();
  const { boards, activeBoard } = state;

  useEffect(() => {
    const keys = Object.keys(boards);
    if (keys.length > 0) {
      if (!activeBoard) {
        setActiveBoard(dispatch, keys[0]);
      }
    }
  }, [boards, activeBoard, dispatch]);

  return (
    <>
      <div className={styles.title}>
        Your boards
        <NewBoard />
      </div>
      <ul className={styles.items}>
        {Object.keys(boards).map((key) => (
          <li
            onClick={() => setActiveBoard(dispatch, key)}
            key={key}
            className={cx(styles.item, activeBoard === key && styles.itemActive)}>
            {boards[key].title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BoardsList;
