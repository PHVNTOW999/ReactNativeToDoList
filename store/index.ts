import {makeObservable, observable, action} from 'mobx';

class TaskStore {
    taskList: any = [
        {title: 'njk', id: 0},
        {title: 'jnkjnknjk', id: 1},
        {title: '8008', id: 2},
        {title: '88008', id: 3},
        {title: 'asoiinoiinocasc', id: 4},
        {title: 'noinion', id: 5},
        {title: 'n,n,mn', id: 6},
        {title: 'bbbb', id: 7},
        {title: 'uuuu', id: 8},
        {title: 'ooo', id: 9},
        {title: '66668', id: 10},
        {title: 'ybybi', id: 11},
    ];

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

    changeTask = (payload) => {
        payload.status = !payload.status
        let task = this.taskList[payload.id]
        if(task) {
            return task = !payload.status
        }
    }

    removeTask = (id) => {
        let task = this.taskList[id]
        console.log(task.id)
        if(task) {
            return this.taskList.splice(id, 1)
        }
    }
}

const taskStore = new TaskStore();

export default taskStore;