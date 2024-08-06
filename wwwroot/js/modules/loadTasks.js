import * as task from './tasks.js';
import * as display from './displayTasks.js';

//fetch todo list and display each item in a container
async function loadTasks() {

    //grab the tasks from the database and pull them into an array of objects
    task.buildTasks();

    //add each task to the parent container div
    let list = display.displayTasks();

}

export { loadTasks };