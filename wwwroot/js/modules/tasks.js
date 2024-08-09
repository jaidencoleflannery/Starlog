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

//update task in database to be complete
function status(Id, Name, IsComplete){

    // data you want to send in the request
    const data = {
        Id: Id,
        Name: Name,
        IsComplete: IsComplete
    };

    let JSONdata = JSON.stringify(data) // convert the data to a JSON string

    // fetch options
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
    };

    // use fetch to send the POST request (this is working but it returns an error)
    fetch('http://localhost:5101/api/TodoItems/' + Id, options)
        .then(response => {
            if (!response.ok) {
                // handle HTTP errors
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Success, completed:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//post supplied data
function post(taskName, isComplete){

    //prepare data and options
    const data = {
        Name: taskName,
        IsComplete: isComplete
    };
    //turn data into JSON format
    const JSONdata = JSON.stringify(data);
 
    //verify JSONdata contains information, and then generate options
    if(JSONdata !== undefined){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata 
        };

        // use fetch to send the POST request containing JSONdata and the generated options
        fetch('http://localhost:5101/api/TodoItems', options)
            .then(response => {
                if (!response.ok) {
                    // handle HTTP errors
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Success, added:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } 
        else{
        console.log("input undefined");
        }

}

//remove supplied data
function remove(id, taskName){

    //prepare data and options
    const data = {
        id: id,
        Name: taskName
    };
    //turn data into JSON format
    const JSONdata = JSON.stringify(data);
 
    //verify JSONdata contains information, and then generate options
    if(JSONdata !== undefined){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata 
        };

        // use fetch to send the DELETE request containing JSONdata and the generated options
        fetch('http://localhost:5101/api/TodoItems', options)
            .then(response => {
                if (!response.ok) {
                    // handle HTTP errors
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Success, added:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } 
        else{
        console.log("input undefined");
        }
}

function clearAll(){

    const options = {
        method: 'DELETE'
    };

    //clear all data
    fetch('http://localhost:5101/api/TodoItems', options)
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success, cleared');
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
}


export { getTasks, buildTasks, status, post, remove, clearAll };