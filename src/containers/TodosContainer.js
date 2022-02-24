import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { inputChange, insert, update, updateInputChange, updateReady } from '../modules/todos';

const TodosContainer = ({input, todos, updateReadyInput,
                          inputChange, insert, updateReady, updateInputChange, update }) => {
  return (
    <Todos
      input={input}
      todos={todos}
      updateReadyInput={updateReadyInput}
      onInputChange={inputChange}
      onInsert={insert}
      onUpdateReady={updateReady}
      onUpdateInputChange={updateInputChange}
      onUpdate={update}
    ></Todos>
  )
}

export default connect(
  ({todos}) => ({
      input: todos.input,
      todos: todos.todos,
      updateReadyInput: todos.updateReadyInput
    }
  ),
  {
    inputChange,
    insert,
    updateReady,
    updateInputChange,
    update
  },
)(TodosContainer)