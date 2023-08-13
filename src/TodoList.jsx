
function TodoList({ todos, onDelete }) {
    return (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    );
  }

  function TodoItem({ todo, onDelete }) {
    return (
      <div>
        <strong>{todo.title} </strong>
        {todo.description} 
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <br />
      </div>
    );
  }

export default TodoList;