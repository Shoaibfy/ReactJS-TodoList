import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle =()=>{
       return {
           background :'#f4f4f4',
           padding:'10px',
           borderBottom :'1px #ccc dotted',
           textDecoration : this.props.todo.completed ? 'line-through' : 'none'
       }
    }
    render() {
        const { id} =this.props.todo
        return (
            <div style={ this.getStyle() } >
                
                <p> 
                     <input type='checkbox'  onChange={this.props.markComplete.bind(this,id)} />   {'   '}
                     { this.props.todo.title }{'   '}
                     <button style={btnStyle} onClick={ this.props.delTodo.bind(this,id) } >X</button>
                 </p>
               
                
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor:'red',
    color:'white',
    padding:'5px 12px',
    borderBottom:'none',
    borderRadius:'100%',
    float:'right',
    coursor:'pointer'
}
export default TodoItem
