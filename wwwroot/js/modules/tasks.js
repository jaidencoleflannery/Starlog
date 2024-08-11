class task {
    constructor(id, name, isCompleted) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

async function getTasks(){

    //fetch todo list
    const response = await fetch("http://localhost:5101/api/TodoItems");
    const todoList = await response.json();

    //check if any todo items exist, if none exist then tell user
    if(todoList.length == 0){
        const result = 0;
        return result;
    }else{
        const result = await todoList;
        return result;
    }
}

function buildTasks(){
    
    let todoList = getTasks();

    if(todoList !== 0){
        //create array to store each object
        var tasks = new Array();
        //loop through list, storing each instace as an object
        for(const counter in todoList){
            //set first task in array as an empty instance
            if(task == 0){
                const emptyTask = new task(0, '', false);
                tasks.push(emptyTask);
            } else{
                //since each task is already formatted correctly, we can just directly push from todoList into the array
                tasks.push(todoList[counter]);
            }
        }
    }
}


// Update task's IsComplete field in database (complete/uncomplete)
async function status(Id, Name, IsComplete){

    // Prepare data and options
    const inputData = JSON.stringify({
        Id: Id,
        Name: Name,
        IsComplete: IsComplete
    });

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: inputData
    };

    try {
        // Use fetch to send the PUT request
        const response = await fetch('http://localhost:5101/api/TodoItems/' + Id, options);

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('Network response was not ok: \n' + response.statusText);
        }

        // Log the response
        console.log('Success, status updated on task: \n' + inputData);

    } catch (error) {
        console.error('Error: \n', error);
    }
}


//post supplied data
async function post(Name, IsComplete){

    //prepare data and options
    const inputData = JSON.stringify({
        Name: Name,
        IsComplete: IsComplete
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: inputData
    };

        // use fetch to send the POST request
        try {
            // Use fetch to send the PUT request
            const response = await fetch('http://localhost:5101/api/TodoItems', options);
    
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error('Network response was not ok: \n' + response.statusText);
            }
    
            // Log the response
            console.log('Success, posted task: \n' + inputData);
    
        } catch (error) {
            console.error('Error: \n', error);
        }

}

//remove supplied data
async function remove(Id){

    //prepare data and options
    const inputData = JSON.stringify({
        Id: Id
    });
    
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: inputData
    };

        // use fetch to send the DELETE request containing JSONdata and the generated options\
        try {
            // Use fetch to send the PUT request
            const response = await fetch('http://localhost:5101/api/TodoItems/' + Id, options);
    
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error('Network response was not ok: \n' + response.statusText);
            }
    
            // Log the response
            console.log('Success, removed task: \n' + inputData);
    
        } catch (error) {
            console.error('Error: \n', error);
        }
}

async function clearAll(){

    const options = {
        method: 'DELETE'
    };

    //clear all data
    try {
        // Use fetch to send the PUT request
        const response = await fetch('http://localhost:5101/api/TodoItems', options);

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('Network response was not ok: \n' + response.statusText);
        }

        // Log the response
        console.log('Success, deleted all tasks.');

    } catch (error) {
        console.error('Error: \n', error);
    }
        
}


export { getTasks, buildTasks, status, post, remove, clearAll };