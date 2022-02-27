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

let todoId = 3;
export const insert = (input) => ({
  type: INSERT,
  todo: {
    id: todoId++,
    input: input,
    done: false,
    updateReady: false
  },
});

export const updateReady = (id) => ({
    type: UPDATE_READY,
    id
  }
)

export const updateInputChange = (updateInput) => ({
  type: UPDATE_INPUT_CHANGE,
  updateInput
})

export const update = (id) => ({
  type: UPDATE,
  id
})

export const toggle = (id) => ({
  type: TOGGLE,
  id
})

export const remove = (id) => ({
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
    case UPDATE_INPUT_CHANGE:
      return {
        ...state,
        updateReadyInput: action.updateInput
      }
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? {...todo, input: state.updateReadyInput, updateReady: !todo.updateReady} : todo))
      }
    case TOGGLE:
      return  {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? {...todo, done: !todo.done} : todo))
    }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state
  }
}

export default todos;

