import { observable, action, computed } from 'mobx';

class Store {
    @observable InputValue = ""
    @observable listData = [
        '1233',
        '3121221'
    ]
    @action
    changeInput(value) {
        this.InputValue = value
    }
    @computed
    get todolen() {
        return this.listData.length
    }
    @action
    addTodo() {
        this.listData = [this.InputValue].concat(this.listData)
        this.InputValue = "";
        console.log(this.InputValue);
    }
    @action
    deleteTodo(index)
    {
        this.listData.splice(index,1)
    }
}

export default new Store()