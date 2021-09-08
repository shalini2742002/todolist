import logo from './logo.svg';
import './App.css';
import Funcomp from './components/Funcomp';
import Classcomp from './components/Classcomp';
import { Component } from 'react';
import Message from './components/Message';
import Lists from './components/Lists';
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stylesheet from './components/Stylesheet';
import Todo from './components/Todo';
import Todonew from './components/Todonew';
class App extends Component{
  render(){
    return (
      <div className="App">
       
        <Todo></Todo>
        
      </div>
    );
  }
  
}

export default App;
