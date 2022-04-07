import React, { createContext, useMemo, useReducer } from 'react';
import Storage from '../utils/localStorage';
import {
  ADD_BOARD,
  SET_ACTIVE_BOARD,
  ADD_COLUMN,
  SET_DATA,
  ADD_CARD,
  EDIT_CARD,
} from './actionTypes';

export const storeReducer = (state: IStoreState, { type, payload }: IAction) => {
  switch (type) {
    case SET_DATA: {
      return {
        ...state,
        ...payload.data,
      };
    }
    case SET_ACTIVE_BOARD: {
      return {
        ...state,
        activeBoard: payload.id,
      };
    }
    case ADD_BOARD: {
      return {
        ...state,
        boards: { ...state.boards, ...payload.board },
      };
    }
    case ADD_COLUMN: {
      return {
        ...state,
        columns: { ...state.columns, ...payload.column },
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        cards: { ...state.cards, ...payload.card },
      };
    }
    case EDIT_CARD: {
      const id = payload.id;
      return {
        ...state,
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            ...payload.params,
          },
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const StoreContext = createContext<{ state: IStoreState; dispatch: IDispatch } | undefined>(
  undefined,
);

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    boards: Storage.load('boards', {}),
    cards: Storage.load('cards', {}),
    columns: Storage.load('columns', {}),
    activeBoard: Storage.load('activeBoard', ''),
  });
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export { StoreProvider as default, StoreContext };
