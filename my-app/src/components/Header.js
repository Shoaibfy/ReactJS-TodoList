import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
            <header   >
                <h1  style={ headerStyle }>
                    TodoList
                </h1>
             <h4   style={ headerStyle2 }>
             <Link  to="/home">Home</Link>  | <Link   to="/" >About </Link> 
             </h4>
            </header>
        
    )
}

const headerStyle ={
    backgroundColor:'black',
    color:'white',
    display:'flex',
    justifyContent:'center'
}

const headerStyle2 ={
    display:'flex',
    justifyContent:'space-around'
    
}

export default Header
