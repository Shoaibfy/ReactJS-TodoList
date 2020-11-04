import React, { Component } from 'react';

export class AddTodo extends Component {
    state={
        title:''
    }

  

    addTitle = (e) =>{
        this.setState({
            title : e.target.value
        })
    }

    displayTitle =(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
        title:e.target.value
    })
    
    }

  


    render() {
        
        return (
           <form  style={{display:'flex'}} onSubmit={this.displayTitle} >
               <input type='text' name='title' placeholder="Add todos..." style={{flex :'10',padding:'10px',margin:'1px'}}
               value={this.state.value} onChange={this.addTitle}   />
               <input type='submit' value='submit' className='btn' style={{flex:'1'}} onClick ={this.addTodo} />
           </form>
        )
    }
}

export default AddTodo
