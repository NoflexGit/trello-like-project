import {
  SET_ACTIVE_BOARD,
} from './actionTypes';

export const setActiveBoard = (dispatch: IDispatch, id: string) => {
  dispatch({
    type: SET_ACTIVE_BOARD,
    payload: { id },
  });
};
