import React, { FC, useMemo } from 'react';
import Column from '../../components/Column';
import useStore from '../../hooks/useStore';
import NewColumnButton from '../../components/NewColumnButton';
import styles from './Content.module.css';

const Content: FC = () => {
  const { state } = useStore();
  const { boards, activeBoard, columns } = state;
  const title = boards[activeBoard]?.title;
  const isBoardsEmpty = Object.keys(boards).length === 0;

  const columnsList = useMemo(() => {
    const result: any[] = [];
    Object.keys(columns).forEach((key) => {
      if (columns[key].board === activeBoard) {
        result.push({ ...columns[key], id: key });
      }
    });
    return result;
  }, [activeBoard, columns]);

  return (
    <main className={styles.content}>
      {isBoardsEmpty ? <div className={styles.empty}>Not a single board has been created yet</div> : (
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
                <NewColumnButton />
              </div>
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default Content;
