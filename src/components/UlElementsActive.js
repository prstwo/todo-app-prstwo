import  React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

 class UlElementsActive extends Component{

  render(){
    return(
      <ul className="todo-list" id="activeList" style={{display:"none"}}>
      {
        TodoStore.todos.map(todoElememnt=>{
          if(!todoElememnt.completed){
            return(
              <TodoItem todo={todoElememnt} idNumber={todoElememnt.id}/>
            )
          }
          
        })
      }
    </ul>  
    )
  }
}

export default UlElementsActive;