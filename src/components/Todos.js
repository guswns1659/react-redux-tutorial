import { useState } from 'react';

const TodoItem = ({input}) => {
  return (
    <div>
      <input type='checkbox' />
      <span>{input}</span>
      <button>Remove</button>
    </div>
)
};

const Todos = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([{input: 'todo1', done: true}, {input: 'todo2', done: true}])

  const onChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTodos(todos.concat({input: input, done: false}));
    setInput('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} />
        <button type='submit'>Insert</button>
      </form>
      <div>
        {todos.map(todo => <TodoItem input={todo.input}></TodoItem>)}
      </div>
    </div>
  );
};

export default Todos;