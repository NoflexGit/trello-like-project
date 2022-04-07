import React, { FC, useMemo } from 'react';
import cx from 'classnames';
import Card from '../Card';
import styles from './Column.module.css';
import useStore from '../../hooks/useStore';
import NewCard from '../NewCard';

interface ICardWithID extends ICard {
  id: string;
}

interface IProps {
  className?: string;
  title: string;
  id: string;
}

const Column: FC<IProps> = ({ className, title, id }) => {
  const { state } = useStore();
  const { cards } = state;

  const cardsList = useMemo(() => {
    const result: ICardWithID[] = [];
    Object.keys(cards).forEach((key) => {
      if (cards[key].column === id) {
        result.push({ ...cards[key], id: key });
      }
    });
    return result;
  }, [cards, id]);

  return (
    <section className={cx(styles.column, className)}>
      <header className={styles.title}>{title}</header>
      <div className={styles.addButton}>
        <NewCard id={id} />
      </div>
      {cardsList.length > 0 && (
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {cardsList.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                content={card.content}
                className={styles.card}
                id={card.id}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Column;
