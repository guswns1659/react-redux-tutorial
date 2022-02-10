const TodoItems = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input type="checkbox"/>
            <span>Example Text</span>
            <button>Remove</button>
        </div>
    )
}

const Todos = ({
                   input,
                   todos,
                   onChangeInput,
                   onInsert,
                   onToggle,
                   onRemove
               }) => {

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input/>
                <button type="submit">Register</button>
            </form>
            <div>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
                <TodoItems/>
            </div>
        </div>
    )
}

export default Todos;