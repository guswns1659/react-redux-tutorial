// action

const INPUT_CHANGE = 'todo/INPUT_CHANGE';
const INSERT = 'todo/INSERT';
const UPDATE_READY = 'todo/UPDATE_READY';
const UPDATE_INPUT_CHANGE = 'todo/UPDATE_INPUT_CHANGE';
const UPDATE = 'todo/UPDATE';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

// action create func
export const inputChange = (input) => ({
    type: INPUT_CHANGE,
    input
  }
);

export const insert = (id, input) => ({
  type: INSERT,
  todo: {
    id: id++,
    input: input,
    done: true,
    updateReady: false
  }
});

const updateReady = (id) => ({
    type: UPDATE_READY,
    id
  }
)

const updateInputChange = (updateInput) => ({
  type: UPDATE_INPUT_CHANGE,
  updateInput
})

const update = (id) => ({
  type: UPDATE,
  id
})

const toggle = (id) => ({
  type: TOGGLE,
  id
})

const remove = (id) => ({
  type: REMOVE,
  id
})

// initialState
const initialState = {
  input: '',
  todos:
    [
      { id: 1, input: 'todo1', done: true, updateReady: false },
      { id: 2, input: 'todo2', done: false, updateReady: false }
    ],
  todoId: 3,
  updateReadyInput: ''
}

function todos(state=initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        input: action.input
      }
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      }
    case UPDATE_READY:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? {...todo, updateReady: !todo.updateReady} : todo))
      }
  }
}

