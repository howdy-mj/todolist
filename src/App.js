import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import ToDoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <ToDoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;