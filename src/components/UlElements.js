import  React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';
class UElements extends Component {
    render(){
        
        return(
          <ul className="todo-list"  id="allList" style={{display:"block"}}>
              {
                TodoStore.todos.map(todoElememnt=>{
                  return(
                    <TodoItem todo={todoElememnt} idNumber={todoElememnt.id}/>
                  )
                })
              }
            </ul> 
        )
    }
}

export default UElements;