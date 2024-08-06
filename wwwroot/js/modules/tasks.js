async function getTasks(){

    //fetch todo list
    const response = await fetch("http://localhost:5101/api/TodoItems");
    const todoList = await response.json();

    //check if any todo items exist, if none exist then tell user
    if(todoList.length == 0){
        return 0;
    }else{
        return todoList;
    }
}

class task {

    constructor(id, name, isCompleted) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }

}

function buildTasks(){

    let todoList = getTasks();

    if(todoList !== 0){

        var tasks = new Array();

        let task = 0;
        for(task in todoList){

            console.log(todoList[task]);
            tasks.push(todoList[task]);

        };

        console.log(tasks);
    }
}


export { getTasks, buildTasks };