
import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './App.css';
class App extends React.Component {

  constructor() {

    super();
    this.state = {
      todos: [],
      item: ''
    };
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);

  }



  addTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return;
    }

    const item = {
      id: new Date().getTime().toString(36) + '-' + Math.random().toString(36),
      title: this.state.item,
      isDone: false
    };

    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos,
      item: ''
    });
  }

  deleteTodo(todo) {


    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);

    todos.splice(pos, 1);
    this.setState({
      todos: todos
    });
  }



    defailTodo(todo) {


      const todos = this.state.todos.slice();
      const pos = this.state.todos.indexOf(todo);

      todos.splice(pos, 1);
      this.setState({
        todos: todos
      });
    }




  checkTodo(todo) {
    const todos = this.state.todos.map(todo => {
      return {id: todo.id, title: todo.title, isDone: todo.isDone};
    });

    const pos = this.state.todos.map(todo => {
      return todo.id;
    }).indexOf(todo.id);

    todos[pos].isDone = !todos[pos].isDone;
    this.setState({
      todos: todos
    });
  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    });
  }

  render() {
    return (
      <div className="container">
        <TodoHeader
          todos={this.state.todos}
          purge={this.purge}
        />
        <TodoList
          todos={this.state.todos}
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoForm
          item={this.state.item}
          updateItem={this.updateItem}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}



export default App;
