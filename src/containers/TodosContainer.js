import Todos from '../components/Todos';
import { changeInput, insert, remove, toggle } from '../modules/Todos';
import { connect } from 'react-redux';

const TodosContainer = ({
                          input,
                          todos,
                          changeInput,
                          insert,
                          toggle,
                          remove,
                        }) => {
  return <Todos input={input}
                todos={todos}
                onChangeInput={changeInput}
                onInsert={insert}
                onToggle={toggle}
                onRemove={remove} />;
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);