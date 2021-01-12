import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import uuid from 'react-uuid';
import axios from 'axios';

import Todo from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';




class App extends React.Component {
  state ={
    todos:[]
}

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then(res=> this.setState({
  todos:res.data
})  )


}


// check box Marking
markComplete =(id)=>{
  this.setState({
    todos : this.state.todos.map((todo) => { 
      if ( todo.id === id ){
        todo.completed = !todo.completed
      }
      return todo;
  } )
})
}



// Adding Todo Item

addTodo =(title) => {
 
axios.post('https://jsonplaceholder.typicode.com/todos',{
  title,
  completed:false
})
.then(res => this.setState({
  todos: [...this.state.todos,res.data]
}))
  
}


// Delete Todo Item

delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({
    todos : [...this.state.todos.filter(todo => todo.id !== id)]
  }))
  
  }

  render() {

  return (
    <Router>
       <div>

        <div>
           <Header/>
           <Route  path="/home" render={ props => ( 
           <React.Fragment>
              <AddTodo addTodo={ this.addTodo} />
                <p>
                  <Todo todos={ this.state.todos }   markComplete={this.markComplete}
                  delTodo={this.delTodo} addTodo={this.addTodo} />
                </p>

           </React.Fragment> ) } />

           <Route exact path="/" component={About} />
            
          
        </div>
        
        <p style={{ float:'right' }} >~Shoaib Ahmed</p>
    
     
    </div>

    </Router>
  
   
  );
}
}
export default App;
