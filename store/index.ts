import {makeObservable, observable, action} from 'mobx';

class CounterStore {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
        });
    }

    increment = () => {
        return this.count++
    }

    decrement = () => {
        this.count--;
    }
}

const counterStore = new CounterStore();
export default counterStore;