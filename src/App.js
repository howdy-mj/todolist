import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import ToDoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 블로그 글 쓰기', checked: false },
      { id: 1, text: ' todo 만들기', checked: true },
      { id: 2, text: ' 운전면허 따기', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    // todo 추가 시, id, 내용, 체크내용도 같이 추가
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    // 누른 키가 enter라면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id); // 파라미터로 받은 id로 인덱스 찾기
    const selected = todos[index];
    const nextTodos = [...todos]; // 배열 복사

    // 기존 값들 복사 후, checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ToDoItemList todos={todos} onToggle={handleToggle} />
      </TodoListTemplate>
    );
  }
}

export default App;