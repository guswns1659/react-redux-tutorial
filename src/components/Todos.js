import UpdateReady from './UpdateReady';

const TodoItem = ({ todo, updateReadyInput, onToggle, onRemove, onUpdateReady, onUpdateInputChange, onUpdate }) => {
  return (
    <div>
      <input type='checkbox' onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />

      {todo.updateReady ?
        (<UpdateReady
          todo={todo}
          updateReadyInput={updateReadyInput}
          onUpdateInputChange={onUpdateInputChange}
          onUpdate={onUpdate}>
        </UpdateReady>) :
        (<span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.input}</span>)
      }

      {!todo.updateReady && <button type='button' onClick={() => onUpdateReady(todo.id)}>Update</button>}

      <button type='button' onClick={() => onRemove(todo.id)}>Remove</button>
    </div>);
};

const Todos = ({input, todos, updateReadyInput,
                onInputChange, onInsert, onUpdateReady, onUpdateInputChange, onUpdate,
                onToggle, onRemove
                }) => {
  // const onToggle = (id) => {
  //   const newTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
  //   // setTodos(newTodos);
  // };
  //
  // const onRemove = (id) => {
  //   // setTodos(todos.filter(todo => todo.id !== id));
  // };

  const handleInsert = (e) => {
    e.preventDefault()
    onInsert(input)
    onInputChange('')
  }

  return (<div>
    <form onSubmit={handleInsert}>
      <input type='text' value={input} onChange={(e) => onInputChange(e.target.value)} />
      <button type='submit'>Insert</button>
    </form>
    <div>
      {todos.map(todo =>
        <TodoItem key={todo.id}
                  todo={todo}
                  updateReadyInput={updateReadyInput}
                  onToggle={onToggle}
                  onRemove={onRemove}
                  onUpdateReady={onUpdateReady}
                  onUpdateInputChange={onUpdateInputChange}
                  onUpdate={onUpdate}
        >
        </TodoItem>)}
    </div>
  </div>);
};

export default Todos;