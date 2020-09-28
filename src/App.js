import React, {Component} from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';
import {observer} from 'mobx-react';

@observer
class App extends Component {
    render() {
        return(
                <div className="become-flex">
                    <div className="todoapp" id='todoapp'>
                        <TodoEntry/>
                        <TodoItems/>
                    </div>
                </div>        
         )
    }
}


export default App;
