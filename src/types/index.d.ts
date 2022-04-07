interface IColumn {
  title: string;
  board: string;
}

interface ICard {
  title: string;
  content: string;
  column: string;
}

interface IBoardData {
  [key: string]: {
    title: string;
  };
}

interface IColumnData {
  [key: string]: IColumn;
}

interface ICardData {
  [key: string]: ICard;
}

interface IAction {
  type: string;
  payload?: any;
}

interface IDispatch {
  (action: IAction): void;
}

interface IStoreState extends Record<string, any> {
  boards: IBoardData;
  cards: ICardData;
  columns: IColumnData;
  activeBoard: string;
}
