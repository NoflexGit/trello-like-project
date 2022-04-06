import React, { createContext, useMemo, useReducer } from 'react';
import {
  SET_ACTIVE_BOARD
} from './actionTypes';
import useLocalStorage from "../hooks/useLocalStorage";

export const storeReducer = (state: IStoreState, { type, payload }: IAction) => {
  switch (type) {
    case SET_ACTIVE_BOARD: {
      return {
        ...state,
        activeBoard: payload.id
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
  const [boards] = useLocalStorage('boards', {})
  const [cards] = useLocalStorage('cards', {})
  const [columns] = useLocalStorage('columns', {})
  const [state, dispatch] = useReducer(storeReducer, {
    boards,
    cards,
    columns,
    activeBoard: null
  });
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export { StoreProvider as default, StoreContext };
