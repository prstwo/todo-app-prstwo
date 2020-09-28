import  React, {Component} from 'react';
import TodoStore from "../stores/TodoStore"

class TodoEntry extends Component {
    state ={
           value: ""
    }
    insert(event){
        if(event.keyCode!== 13){
            return
        }
        event.preventDefault();
        TodoStore.addTodo(this.state.value);
        this.setState(
            {value: ""}
        )
    }

    render(){
      
        return(
        <header className="header">
            <h1>to do</h1>
            <input type='text' value={this.state.value} className="new-todo" placeholder="چه کاری باید انجام بشه؟ تایپ کن :)"
             onChange={
                 event => this.setState(
                     {
                         value: event.target.value
                     }
                 )} onKeyDown={event =>this.insert(event)} />
        </header>
        )
    }

}
export default TodoEntry;