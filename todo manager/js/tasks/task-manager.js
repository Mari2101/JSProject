export class TaskManager {
    //props:
    tasks = [];
    //methods:
    addTask(task) {
        this.tasks.push(task);
    }
    checkTask(task) {
        this.tasks.push(task);
    }
    removeTask(timeStamp) {
        //this.tasks = this.tasks.filter((t) => t.timeStamp != id);
        let index = this.tasks.findIndex((t) => t.timeStamp === timeStamp);
        this.tasks.splice(index, 1);
    }
    updateTask(task) {
        //this.tasks = this.tasks.filter((t) => t.timeStamp != id);
        // remove one element (without deleting the entire array)
        let index = this.tasks.findIndex((t) => t.timeStamp === task.timeStamp);
        this.tasks.splice(index, 1, task);
    }
}
export let tm = new TaskManager();
