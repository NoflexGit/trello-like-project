import React, { FC, useCallback, useMemo } from 'react';
import Column from '../../components/Column';
import useStore from '../../hooks/useStore';
import NewColumn from '../../components/NewColumn';
import styles from './Content.module.css';
import Button from '../../components/common/Button';
import { generateDataFromMock } from '../../contexts/actions';

interface IColumnWithID extends IColumn {
  id: string;
}

const Content: FC = () => {
  const { state, dispatch } = useStore();
  const { boards, activeBoard, columns } = state;
  const title = boards[activeBoard]?.title;
  const isBoardsEmpty = Object.keys(boards).length === 0;

  const columnsList = useMemo(() => {
    const result: IColumnWithID[] = [];
    Object.keys(columns).forEach((key) => {
      if (columns[key].board === activeBoard) {
        result.push({ ...columns[key], id: key });
      }
    });
    return result;
  }, [activeBoard, columns]);

  const handleUseMockData = useCallback(() => {
    generateDataFromMock(dispatch);
  }, [dispatch]);

  return (
    <main className={styles.content}>
      {isBoardsEmpty ? (
        <>
          <div className={styles.empty}>
            Not a single board has been created yet
            <Button onClick={handleUseMockData} className={styles.emptyButton}>
              Create template boards
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.title}>{title}</div>
          <section className={styles.columns}>
            <section className={styles.columnsWrapper}>
              {columnsList.map((column) => (
                <Column
                  title={column.title}
                  key={column.id}
                  id={column.id}
                  className={styles.column}
                />
              ))}
              <div className={styles.newColumn}>
                <NewColumn />
              </div>
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default Content;
