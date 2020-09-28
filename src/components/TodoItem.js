import React, {Component} from 'react';
import {observer} from "mobx-react";
import TodoStore from "../stores/TodoStore"
@observer
class TodoItem extends Component {
       
    ontoggle = () =>{
        this.props.todo.toggle();
    } 
    function1(elem){
        let idNum= elem.target.parentElement.parentElement.id;
        TodoStore.findElem(idNum);
    }
    render(){
        const {todo} = this.props; 
        return(
            <li className={todo.completed ?'completed' : " "} id={this.props.idNumber}>
                <div className="view">
                    <input type="checkbox" className="toggle" value="on" onChange={this.ontoggle} checked={todo.completed}/>
                    <label>{todo.title} </label>
                    <button className="destroy fa fa-close" onClick={(e)=>{this.function1(e)}}> 
                    </button>  
                </div>
            </li>
        )
    }
}

export default TodoItem;