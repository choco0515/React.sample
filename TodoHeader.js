import React from 'react';
function TodoHeader(props) {
  const remaining = props.todos.filter(todo => {
    return !todo.isDone;
  });

  return (
    <h1>
      My Todos
      <span>({remaining.length}/{props.todos.length})</span>
    </h1>
  );
}


export default TodoHeader;
