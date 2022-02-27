import { createAction, handleActions } from 'redux-actions';

// action
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// action create
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initial state
const initialState = {
  counter: 0
}

// reducer
const counter = handleActions(
  {
    [INCREASE]: ({counter}) => counter + 1,
    [DECREASE]: ({counter}) => counter - 1
  },
  initialState
)

export default counter;
