import  React, {Component} from 'react';
import TodoStore from '../stores/TodoStore';
import UlElements from './UlElements';
import UlElementsCompleted from './UlElementsCompleted';
import UlElementsActive from './UlElementsActive';
import { observer } from 'mobx-react';

@observer
class TodoItems extends Component {
  allTodo(){
    document.getElementById("allList").style.display="block";
    document.getElementById("activeList").style.display="none";
    document.getElementById("doneList").style.display="none";
  }
  doneTodo(){
    let completedTodos = TodoStore.todos.filter(elem => elem.completed);
    if (completedTodos.length==0){
      alert("هیچ آیتم انجام شده‌ای وجود ندارد")
      document.getElementById("allList").style.display="block";
      document.getElementById("doneList").style.display="none";
      document.getElementById("activeList").style.display="none";
    }
    else{
      document.getElementById("allList").style.display="none";
      document.getElementById("doneList").style.display="block";
      document.getElementById("activeList").style.display="none";
    }

  }
  activeTodo(){
    let activeTodos = TodoStore.todos.filter(elem => !elem.completed);
    if (activeTodos.length==0){
      alert("تمام آیتم‌ها انجام شده‌است")
      document.getElementById("allList").style.display="block";
      document.getElementById("doneList").style.display="none";
      document.getElementById("activeList").style.display="none";
    }
    else{
      document.getElementById("allList").style.display="none";
      document.getElementById("doneList").style.display="none";
      document.getElementById("activeList").style.display="block";
    }
     
  }
    render(){
        return(
          
            <section className="main">
              <UlElements/> 
            <UlElementsCompleted/> 
            <UlElementsActive/>      
            <div className="footer">
              <div className="todo-count">آیتم ناتمام:<span> {TodoStore.todos.filter(elements =>{return !elements.completed }).length}  </span></div>
              <div className="filter-section">
                <button onClick={this.allTodo}>همه </button>
                <button  onClick={this.activeTodo}>ناتمام</button>
                <button> <span  onClick={this.doneTodo}>انجام شده</span></button>
              </div>
              <div className="remover-section"> <button  onClick={TodoStore.removeCompleted}> حذف انجام شده‌ها</button>
              </div>
            </div> 
            <div className="pages"></div>
          </section>
         
          
        )
    }

}

export default TodoItems;