import React from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';



class Todo extends React.Component {
  
  render() {
  
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}  markComplete={this.props.markComplete} delTodo={this.props.delTodo} addTodo ={this.props.addTodo} />
    ) );
  }
}

// Todo.PropTypes = {
//     todos : PropTypes.array.isRequired
// }
 
export default Todo;
