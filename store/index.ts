import {makeObservable, observable, action} from 'mobx';

class CounterStore {
    count: number = 0;

    constructor() {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
        });
    }

    increment = () => {
        return this.count += 10
    }

    decrement = () => {
        this.count--;
    }
}

class TaskStore {
    taskList: any = [{title: 'ascasc'}];

    constructor() {
        makeObservable(this, {
            taskList: observable,
            addTask: action,
            changeTask: action,
            removeTask: action,
        });
    }

    addTask = (payload: any) => {
        return this.taskList.push(payload)
    }

    changeTask = (i, payload) => {
        return this.taskList[i] = payload
    }

    removeTask = (payload) => {
        return this.taskList.splice(1, payload)
    }
}

const counterStore = new CounterStore();
const taskStore = new TaskStore();

export default taskStore;
// export default counterStore;

// export default {taskStore, counterStore}