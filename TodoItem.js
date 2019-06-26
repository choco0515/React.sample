import React from 'react';
function TodoItem(props) {
  return (
    <li key={props.todo.id}>
      <label>
        <input type="checkbox"
          checked={props.todo.isDone}
          onChange={() => props.checkTodo(props.todo)}
        />
        <span className={props.todo.isDone ? 'done' : ''}>
          {props.todo.title}
        </span>
      </label>
      <span className="Details"　onClick={() => props.detailTodo(props.todo)} onChange={props.introduction}>[o]</span>
      <span className="cmd" onClick={() => props.deleteTodo(props.todo)}>[x]</span>
    </li>
  );
}

export default TodoItem;
