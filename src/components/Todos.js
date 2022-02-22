import { useState } from 'react';

const TodoItem = ({ todo, onToggle, onRemove, onUpdateReady }) => {
  return (
    <div>
      <input type='checkbox' onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />

      {todo.updateReady ? (<input type='text' />) : (<span style={{
        textDecoration: todo.done ? 'line-through' : 'none'
      }}>{todo.input}</span>)}

      <button type='button' onClick={() => onUpdateReady(todo.id)}>Update</button>
      <button type='button' onClick={() => onRemove(todo.id)}>Remove</button>
    </div>);
};

const Todos = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(
    [
      { id: 1, input: 'todo1', done: true, updateReady: false },
      { id: 2, input: 'todo2', done: false, updateReady: false }
    ]);
  const [todoId, setTodoId] = useState(3);

  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat({ id: todoId, input: input, done: false, updateReady: false }));
    setInput('');
    setTodoId(todoId + 1);
  };

  const onToggle = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    setTodos(newTodos);
  };

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onUpdateReady = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, updateReady: !todo.updateReady } : todo));
  };

  return (<div>
    <form onSubmit={onSubmit}>
      <input type='text' value={input} onChange={onChange} />
      <button type='submit'>Insert</button>
    </form>
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}
                                   onUpdateReady={onUpdateReady}></TodoItem>)}
    </div>
  </div>);
};

export default Todos;