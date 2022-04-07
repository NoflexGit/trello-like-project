import { nanoid } from 'nanoid';
import {
  ADD_BOARD,
  ADD_COLUMN,
  SET_ACTIVE_BOARD,
  ADD_CARD,
  EDIT_CARD,
  SET_DATA,
} from './actionTypes';
import Storage from '../utils/localStorage';
import data from '../mocks/mockData';

export const setActiveBoard = (dispatch: IDispatch, id: string) => {
  dispatch({
    type: SET_ACTIVE_BOARD,
    payload: { id },
  });
  Storage.save('activeBoard', id);
};

export const addBoard = (boards: IBoardData, dispatch: IDispatch, title: string) => {
  const id = nanoid(8);
  const board: IBoardData = {
    [id]: {
      title,
    },
  };

  dispatch({
    type: ADD_BOARD,
    payload: { board },
  });

  setActiveBoard(dispatch, id);
  Storage.save('boards', { ...boards, ...board });
};

export const addColumn = (dispatch: IDispatch, state: IStoreState, title: string) => {
  const id = nanoid(8);
  const column: IColumnData = {
    [id]: {
      title,
      board: state.activeBoard,
    },
  };

  dispatch({
    type: ADD_COLUMN,
    payload: { column },
  });

  Storage.save('columns', { ...state.columns, ...column });
};

export const addCard = (
  dispatch: IDispatch,
  cards: ICardData,
  columnId: string,
  title: string,
  content: string,
) => {
  const id = nanoid(8);

  const card: ICardData = {
    [id]: {
      title,
      content,
      column: columnId,
    },
  };

  dispatch({
    type: ADD_CARD,
    payload: { card },
  });

  Storage.save('cards', { ...cards, ...card });
};

export const editCard = (
  dispatch: IDispatch,
  cards: ICardData,
  id: string,
  params: Record<string, string>,
) => {
  dispatch({
    type: EDIT_CARD,
    payload: { id, params },
  });
  Storage.save('cards', { ...cards, [id]: { ...cards[id], ...params } });
};

export const generateDataFromMock = (dispatch: IDispatch) => {
  dispatch({
    type: SET_DATA,
    payload: { data },
  });
  for (let key in data) {
    Storage.save(key, data[key]);
  }
};
