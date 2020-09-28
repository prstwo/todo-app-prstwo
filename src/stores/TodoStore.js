import {observable, action} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    
    store;
     @observable todos = [];    
    lastId= 0;
    
    @action 
    addTodo(title){
        this.todos.push(new TodoModel(this, title, false,this.lastId ++) );
    }
    @action removeCompleted =() => {
     
      for(let i=0; i<this.todos.length; i++){
        if(this.todos[i].completed){
          return(this.todos.splice( i, 1));
        }
       }
    }
    @action findElem(e){
       for(let i=0; i<this.todos.length; i++){
        if(this.todos[i].id==e){
          return(this.todos.splice(i,1))
         } 
        
       }
      }
}
const store = new TodoStore()
export default store;
