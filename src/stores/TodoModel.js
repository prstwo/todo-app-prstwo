import {observable, action} from 'mobx'

export default class TodoModel {
    @observable title;
    @observable completed;
    id;
    store;
    constructor(store, title, completed, id){
        this.title = title;
        this.completed=completed;
        this.store= store;
        this.id= id;   
    }
    @action toggle(){
        this.completed = !this.completed;
    }
}
