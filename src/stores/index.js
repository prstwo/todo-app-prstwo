import { observable } from 'mobx';
class Store{
    @observable time;
    constructor(){
        this.time= new Date();
    }
}
const store = new Store();

export default  store;