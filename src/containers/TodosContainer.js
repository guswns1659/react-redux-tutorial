import Todos from '../components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, insert, remove, toggle, update, updateInputChange, updateReady } from '../modules/todos';
import { useCallback } from 'react';

const TodosContainer = () => {
  const { input, todos, updateReadyInput } = useSelector(({todos}) => ({
    input: todos.input,
    todos: todos.todos,
    updateReadyInput: todos.updateReadyInput
  }));

  const dispatch = useDispatch();

  const onInputChange = useCallback(input => dispatch(inputChange(input)), [dispatch])
  const onInsert = useCallback(input => dispatch(insert(input)), [dispatch])
  const onUpdateReady = useCallback(id => dispatch(updateReady(id)), [dispatch])
  const onUpdateInputChange = useCallback(updateReadyInput => dispatch(updateInputChange(updateReadyInput)), [dispatch])
  const onUpdate = useCallback(id => dispatch(update(id)), [dispatch])
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch])
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch])

  return (
    <Todos
      input={input}
      todos={todos}
      updateReadyInput={updateReadyInput}
      onInputChange={onInputChange}
      onInsert={onInsert}
      onUpdateReady={onUpdateReady}
      onUpdateInputChange={onUpdateInputChange}
      onUpdate={onUpdate}
      onToggle={onToggle}
      onRemove={onRemove}
    ></Todos>
  )
}

export default TodosContainer;