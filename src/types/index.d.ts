interface IBoardData {
  [key: string]: {
    title: string;
    columns: string[];
  };
}

interface IColumnData {
  [key: string]: {
    title: string;
    cards: string[];
    board: string;
  };
}

interface ICardData {
  [key: string]: {
    title: string;
    description: string[];
    column: string;
  };
}
