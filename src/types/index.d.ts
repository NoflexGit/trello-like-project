interface IBoardData {
  [key: string]: {
    title: string;
  };
}

interface IColumnData {
  [key: string]: {
    title: string;
    board: string;
  };
}

interface ICardData {
  [key: string]: {
    title: string;
    content: string;
    column: string;
  };
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
}
