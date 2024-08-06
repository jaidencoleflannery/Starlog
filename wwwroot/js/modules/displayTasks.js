import * as task from './tasks.js';

function displayTasks(){
    
    //create main container and assign it to 'list'
     const itemsList = document.createElement("div");
     itemsList.id = "ItemsList";
 
     const itemsListCompleted = document.createElement("div");
     itemsListCompleted.id = "ItemsListCompleted";
 
     //add todo title
     const todoTitleDiv = document.createElement("div");
     todoTitleDiv.className = "sectionTitle";
     const todoTitle = ("TODO");
     let todoTitleNode = document.createTextNode(todoTitle);
 
     todoTitleDiv.append(todoTitleNode);
     itemsList.appendChild(todoTitleDiv);
 
     //add completed title
     const completedTitleDiv = document.createElement("div");
     completedTitleDiv.className = "sectionTitle";
     const completedTitle = ("COMPLETED");
     let completedTitleNode = document.createTextNode(completedTitle);
 
     completedTitleDiv.append(completedTitleNode);
     itemsListCompleted.appendChild(completedTitleDiv);

    //fetch todo list
    const todoList = task.getTasks().then(todoList => {
        console.log(todoList); // This will log the actual result
    }).catch(error => {
        console.error('Error fetching tasks:', error);
    });

    //loop through todolist, displaying each item
    for(const item of todoList){

        //create individual items
        if(!item.isComplete){
            const todoItem = document.createElement("div");
            todoItem.id = item.id;
            todoItem.className = "TodoItem";
            
            //create a string to print to the screen (individually)

            //id
            const idString = (item.id);
            let itemId = document.createTextNode(idString);

            const IdItem = document.createElement("div");
            IdItem.id = (item.id + "Id");
            IdItem.className = "TodoItemId";

            IdItem.appendChild(itemId);

            //append the todo item 'id'
            todoItem.appendChild(IdItem);


            //name
            const nameString = (item.name);
            let itemName = document.createTextNode(nameString);

            const nameItem = document.createElement("div");
            nameItem.id = (item.id + ".name");
            nameItem.className = "TodoItemName";

            nameItem.appendChild(itemName);

            //checkmark for completing/uncompleting
            const checkDiv = document.createElement("div");
            checkDiv.className = "CompleteCheck";
            checkDiv.id = item.id;

            // Add checkmarks to todo items
            const svgContent = 

                `<svg fill="#ffffff" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" id="CompleteCheckSVG">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <title>add</title> <path d="M24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"/> </g>
                </svg>`;

            // Append the SVG content to the newly created div
            checkDiv.innerHTML = svgContent;

            //append the todo item 'name' and checkmark
            todoItem.appendChild(nameItem);
            todoItem.appendChild(checkDiv);

            /*
            //completed
            const completedString = ("Completed: " + item.isComplete);
            let itemIsComplete = document.createTextNode(completedString);

            const completedItem = document.createElement("div");
            completedItem.id = (item.id + ".completed");
            completedItem.className = "TodoItemCompleted";

            completedItem.appendChild(itemIsComplete);

            //append the todo item 'iscompleted'
            todoItem.appendChild(completedItem);
            */

            //append the todo item into its container
            itemsList.appendChild(todoItem);

        }

        if(item.isComplete){
            const todoItem = document.createElement("div");
            todoItem.id = item.id;
                todoItem.className = "TodoItemCompleted"
            
            //create a string to print to the screen (individually)

            //id
            const idString = (item.id);
            let itemId = document.createTextNode(idString);

            const IdItem = document.createElement("div");
            IdItem.id = (item.id + ".id");
            IdItem.className = "TodoItemId";

            IdItem.appendChild(itemId);

            //append the todo item 'id'
            todoItem.appendChild(IdItem);


            //name
            const nameString = (item.name);
            let itemName = document.createTextNode(nameString);

            const nameItem = document.createElement("div");
            nameItem.id = (item.id + ".name");
            nameItem.className = "TodoItemName";

            nameItem.appendChild(itemName);

            //append the todo item 'name'
            todoItem.appendChild(nameItem);

            /*
            //completed
            const completedString = ("Completed: " + item.isComplete);
            let itemIsComplete = document.createTextNode(completedString);

            const completedItem = document.createElement("div");
            completedItem.id = (item.id + ".completed");
            completedItem.className = "TodoItemCompleted";

            completedItem.appendChild(itemIsComplete);

            //append the todo item 'iscompleted'
            todoItem.appendChild(completedItem);
            */

            //append the todo item into its container
            itemsListCompleted.appendChild(todoItem);
        }
    }

    //print list and completed list to webpage
    const listFooter = document.getElementById(footer);
    if(listFooter === null){
        const main = document.getElementById("main")
            if(main){
                main.insertBefore(itemsList, listFooter);
                main.insertBefore(itemsListCompleted, listFooter);
            } else{
                console.log("ERROR: main not found.")
            }
    } else{
        console.log("ERROR: listFooter not found.")
    }


    /////////////

    // add complete button functionality
    const checkboxes = document.getElementsByClassName("CompleteCheck");

    if(checkboxes[0] !== undefined){
        let checkbox = 0;
        for(checkbox in checkboxes){

            //find id
            const check = document.getElementById(checkbox.id);

            check.addEventListener("click", (event) => {
        
                console.log("COMPLETED " + checkbox.id);

                const Name = "empty";
                const Id = checkbox.id;

                for(const item of todoList){
                    console.log(item.name);

                    if(item.id == Id){
                        Name = item.name;
                    }

                console.log("Data: " + Name + Id);
                }

                                // post supplied data

                                        // data you want to send in the request
                                        const data = {
                                            Id: Id,
                                            Name: Name,
                                            IsComplete: true
                                        };

                                        // fetch options
                                        const options = {
                                            method: 'PUT',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(data) // convert the data to a JSON string
                                        };

                                        // use fetch to send the POST request
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
        
            });
        }
    }
}

export { displayTasks };