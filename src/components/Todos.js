import { useState } from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
  return (
    <div>
      <input type='checkbox' onClick={onToggle} checked={todo.done} value={todo.id} readOnly='true'/>
      <span style={{
        textDecoration: todo.done ? 'line-through' : 'none'
      }}>{todo.input}</span>
      <button type='button' onClick={onRemove} >Remove</button>
    </div>
)
};

const Todos = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([{id:1, input: 'todo1', done: true}, {id:2, input: 'todo2', done: false}])

  const onChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTodos(todos.concat({id: todos.length + 1, input: input, done: false}));
    setInput('')
  }

  const onToggle = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(Number(e.target.value))
    const newTodos = todos.map(todo => todo.id === Number(e.target.value) ? {...todo, done: !todo.done} : todo)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} />
        <button type='submit'>Insert</button>
      </form>
      <div>
        {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle}></TodoItem>)}
      </div>
    </div>
  );
};

export default Todos;