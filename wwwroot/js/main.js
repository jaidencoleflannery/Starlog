window.onload = function() {

    TitleColor();
    NavOptions();

  };

//add color styling to title on hover
function TitleColor(){

    const starlog = document.getElementsByClassName('starlog');

    let counter = 0;

    for(span of starlog){
        let cursor = starlog[counter];

        cursor.addEventListener("mouseover", (event) => {
            var colors = ['#555bff', '1fc11b', '#ffd913', '#ff9c55', '#ff5555'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.color = randomColor;
        });

        cursor.addEventListener("click", (event) => {
            var colors = ['#555bff', '1fc11b', '#ffd913', '#ff9c55', '#ff5555'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.color = randomColor;

            window.location.href = "/index.html";
        });

        cursor.addEventListener("mouseout", (event) => {
            cursor.style.color = ['#FFF'];
        });

        counter = counter + 1;
    }

}

//adds add, remove, and clearall functionality to nav dropdown
function NavOptions(){

    const navExists = document.getElementById("NavFormEmpty");
    if(navExists){
        navExists.remove();
    }

    //form to hold user input(generates on click)
    const navForm = document.createElement("div");
    navForm.id = "NavFormEmpty";

    //add
    const add = document.getElementById("AddOption");
    
    add.addEventListener("click", (event) => {

        //remove menu
        let cursor = document.getElementById("FormContainer");
        if(cursor){
            cursor.remove();
        }

        //#NavForm contains styling that will make the parent div appear
        navForm.id = "NavForm";

        //fill form with options
        const addForm = document.createElement("div");
        addForm.id = "FormContainer";

        const addFormContent =
            `<form id="Form">
                <div class="AddTask">
                    <label>TASK</label>
                    <br>
                    <input type="text" placeholder="TODO" id="AddTaskInput">
                </div>
                <div class="AddTask">
                    <label>COMPLETED</label>
                    <br>
                    <input type="checkbox" value="true" id="AddCompletedCheckbox">
                </div>
                <div class="AddTask">
                    <input type="submit" value="ADD">
                </div>
            </form>`

            addForm.innerHTML = addFormContent;
            navForm.appendChild(addForm);

            const addCursor = document.getElementById("Form");

            addCursor.addEventListener("submit", (e) => {
                e.preventDefault();

                let task = document.getElementById("AddTaskInput");
                // this is always returning true for some reason V
                let completedCheck = document.getElementById("AddCompletedCheckbox").checked;

                let completed = false;
                    if(completedCheck == true){
                        completed = true;
                    }

                                // post supplied data

                                    // data you want to send in the request
                                    const data = {
                                        Name: task.value,
                                        IsComplete: completed
                                    };

                                    const JSONdata = JSON.stringify(data);
                                 
                                    if(JSONdata !== undefined){
                                        // fetch options
                                        const options = {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(data) // convert the data to a JSON string
                                        };

                                        // use fetch to send the POST request
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


                    //remove add menu
                    let cursor = document.getElementById("NavForm");
                    cursor.remove();

                    location.reload();

              });
    });
    
    //remove
    const remove = document.getElementById("RemoveOption");
    
    remove.addEventListener("click", (event) => {

        //remove menu
        let cursor = document.getElementById("FormContainer");
        if(cursor){
            cursor.remove();
        }

        //#NavForm contains styling that will make the parent div appear
        navForm.id = "NavForm";

        //fill form with options
        const removeForm = document.createElement("div");
        removeForm.id = "FormContainer";

        const removeFormContent =
            `<form id="Form">
                <div class="AddTask">
                    <label>TASK</label>
                    <br>
                    <input type="text" placeholder="TODO" id="RemoveTaskInput">
                </div>
                <div class="AddTask">
                    <label>ID</label>
                    <br>
                    <input type="text" placeholder="#" id="RemoveId">
                </div>
                <div class="AddTask">
                    <input type="submit" value="REMOVE">
                </div>
            </form>`

            removeForm.innerHTML = removeFormContent;
            navForm.appendChild(removeForm);

            const removeCursor = document.getElementById("Form");

            removeCursor.addEventListener("submit", (e) => {
                e.preventDefault();

                let task = document.getElementById("RemoveTaskInput");
                let id = document.getElementById("RemoveId");

                                //post supplied data

                                    // data you want to send in the request
                                    const data = {
                                        Id: id.value,
                                        Name: task.value
                                    };

                                    // define the options for the fetch request
                                    const options = {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(data) // Convert the data to a JSON string
                                    };

                                    // Use fetch to send the POST request
                                    fetch('http://localhost:5101/api/TodoItems/' + id.value, options)
                                        .then(response => {
                                            if (!response.ok) {
                                                // Handle HTTP errors
                                                throw new Error('Network response was not ok ' + response.statusText);
                                            }
                                            return response.json();
                                        })
                                        .then(data => {
                                            console.log('Success, removed:', data);
                                        })
                                        .catch(error => {
                                            console.error('Error:', error); 
                                        });


                    //remove menu
                    let cursor = document.getElementById("NavForm");
                    cursor.remove();

                    location.reload();

              });
    });

    //clear all
    const clearAll = document.getElementById("ClearAllOption");
    
    clearAll.addEventListener("click", (event) => {

        //remove menu
        let cursor = document.getElementById("FormContainer");
        if(cursor){
            cursor.remove();
        }

        //#NavForm contains styling that will make the parent div appear
        navForm.id = "NavForm";

        //fill form with options
        const clearForm = document.createElement("div");
        clearForm.id = "FormContainer";

        const clearFormContent =
            `<form id="Form">
                <div class="AddTask">
                    <label>CLEAR ALL?</label>
                </div>
                <div class="AddTask">
                    <input type="submit" value="YES">
                </div>
            </form>`

            clearForm.innerHTML = clearFormContent;
            navForm.appendChild(clearForm);

            const clearCursor = document.getElementById("Form");

            clearCursor.addEventListener("submit", (e) => {
                e.preventDefault();

                                //clear all data

                                    const options = {
                                        method: 'DELETE'
                                    };

                                    // fetch clear data
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


                    //remove menu
                    let cursor = document.getElementById("NavForm");
                    cursor.remove();

                    location.reload();

              });
    });

    clearAll.addEventListener("click", (event) => {

        //#NavForm contains styling that will make the parent div appear
        navForm.id = "NavForm";
    });

    //append form to page (occurs at first loading of page)
    const endOfList = document.getElementById('footer');
    if(endOfList){
        const main = document.getElementById("main");
            if(main){
                main.insertBefore(navForm, endOfList);
            } else{
                console.log("ERROR: main not found.");
            }
    } else{
        console.log("ERROR: endOfList not found.");
    }

}

//fetch todo list and display each item in a container
async function DisplayFetch(end) {
    //fetch todo list
    const response = await fetch("http://localhost:5101/api/TodoItems");
    const todoList = await response.json();

    //create item container (only once)
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

    

    //check if any todo items exist, if none exist then tell user
    if(todoList.length == 0){

        const todoItemEmpty = document.createElement("div");
        todoItemEmpty.id = "EmptyTodoItem";
        todoItemEmpty.className = "TodoItemEmpty"; /*contains needed CSS, no need for another css tag*/

        const todoItemEmptyCompleted = document.createElement("div");
        todoItemEmptyCompleted.id = "EmptyTodoItemCompleted";
        todoItemEmptyCompleted.className = "TodoItemEmpty";

        const emptyItemString = ("No TODO Tasks Found");

        let emptyItem = document.createTextNode(emptyItemString);
        let emptyItemCompleted = document.createTextNode(emptyItemString);

        todoItemEmpty.appendChild(emptyItem);
        todoItemEmptyCompleted.appendChild(emptyItemCompleted);
        
        //append the todo item into its container
        itemsList.appendChild(todoItemEmpty);
        itemsListCompleted.appendChild(todoItemEmptyCompleted);
    
    }

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

    //print list and completed listt to webpage
    const endOfList = document.getElementById(end);
    if(endOfList){
        const main = document.getElementById("main")
            if(main){
                main.insertBefore(itemsList, endOfList);
                main.insertBefore(itemsListCompleted, endOfList);
            } else{
                console.log("ERROR: main not found.")
            }
    } else{
        console.log("ERROR: endOfList not found.")
    }


    /////////////

    // add complete button functionality
    const checkboxes = document.getElementsByClassName("CompleteCheck");

    if(checkboxes[0] !== undefined){
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