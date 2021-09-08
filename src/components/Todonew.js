import React, { Component } from 'react'
 class Todonew extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              input:"",
              todolist:[]
         }
     }
      handleInputChange=(event)=>{
        this.setState({
            input: event.target.value,
           
        })
      }
      addTodo=()=>{
          
            const todolist=[...this.state.todolist]
            todolist.push(this.state.input)
          
          console.log(this.state.todolist)
      }
    render() {
        return (
            <>
            <h1>TODO LIST</h1>
            <input type='text' placeholder='enter a work to do' value = {this.state.input} 
            onChange={this.handleInputChange} ></input>
            <button onClick={this.addTodo}>Add </button>
            <ol>
                <li>{this.state.input}</li>
            </ol>
            </>
        )
    }
}

export default Todonew
