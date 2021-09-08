import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import './Styles.css'
function Todo() {

    const [current,update]=useState(" ")
    const [items,addItem]=useState([])

    
   const handleInputChange=(event)=>{
        update(event.target.value)
      }
    
    const Todolist=()=>{
           addItem((previous)=>{
               return [...previous,current]
           })
           update(()=>{
               return " "
           })
    }
    const deleteTodo=(key)=>{
       console.log("deleted")
        addItem((previous)=>{
            return previous.filter((arr,ind)=>{
                 return ind!==key;
            })
        })
        
    }
   const updateTodo=(ind)=>{
       console.log("updated");
     
          let newEditItem = items[ind]
          update(newEditItem)
          console.log(newEditItem)
      
   }

    return (
        
        <>
        
        <Container>
            <h1 class="head">TODO LIST</h1>
            <input class="in" type='text' placeholder='enter a work to do' onChange={handleInputChange}></input>
            <button onClick={Todolist} className="but">Add </button>
            <ol>
                {items.map((item,index)=>{
                    return (
                    <div className="icon">
                    
                    
                    <li class="li">{item}</li>
                    <button class="but1" key={index} onClick={()=>{deleteTodo(index)}}>DELETE</button>
                    <button class="but2" onClick={()=>{updateTodo(index)}}>UPDATE</button>
                    </div>
                    )
                })}
            </ol>
            </Container>
        </>
    )
}

export default Todo
