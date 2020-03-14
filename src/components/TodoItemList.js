import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="Hello"/>
                <TodoItem text="Test"/>
                <TodoItem text="React"/>
            </div>
        );
    }
}

export default TodoItemList;