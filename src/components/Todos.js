import { useState } from 'react';

const TodoItem = ({todo, onToggle}) => {
  return (
    <div>
      <input type='checkbox' onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true}/>
      <span style={{
        textDecoration: todo.done ? 'line-through' : 'none'
      }}>{todo.input}</span>
      <button type='button' >Remove</button>
    </div>
)
};

const Todos = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([{id:1, input: 'todo1', done: true}, {id:2, input: 'todo2', done: false}])
  const [todoId, setTodoId] = useState(3);

  const onChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTodos(todos.concat({id: todoId, input: input, done: false}));
    setInput('')
    setTodoId(todoId + 1)
  }

  const onToggle = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={input} onChange={onChange} />
        <button type='submit'>Insert</button>
      </form>
      <div>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>)}
      </div>
    </div>
  );
};

export default Todos;