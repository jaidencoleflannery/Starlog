import * as task from './tasks.js';

async function displayTasks(){
    
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
    const todoList = await task.getTasks();

    //alert user if no tasks exist
    if(todoList === 0){
        const todoItem = document.createElement("div");
                todoItem.id = 0;
                todoItem.className = "TodoItem";
                
                //create a string to print to the screen

                //id
                const idString = ('0');
                let itemId = document.createTextNode(idString);

                const IdItem = document.createElement("div");
                IdItem.id = (idString + "Id");
                IdItem.className = "TodoItemId";

                IdItem.appendChild(itemId);

                //append the todo item 'id'
                todoItem.appendChild(IdItem);


                //name
                const nameString = ('NO TASKS EXIST');
                let itemName = document.createTextNode(nameString);

                const nameItem = document.createElement("div");
                nameItem.id = ('0' + ".name");
                nameItem.className = "TodoItemName";

                nameItem.appendChild(itemName);

                todoItem.appendChild(nameItem);

                itemsList.appendChild(todoItem);
    }

    if(todoList !== 0){
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

                    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24" id="Shadow-Add--Streamline-Sharp----Material-Symbols">
                    <path fill="#ffffff" d="M12.697916666666668 13.177083333333334V10.302083333333334H9.822916666666668V8.864583333333334H12.697916666666668V5.989583333333334H14.135416666666668V8.864583333333334H17.010416666666668V10.302083333333334H14.135416666666668V13.177083333333334H12.697916666666668ZM1.9166666666666667 21.083333333333336V6.0375H6.0375V1.9166666666666667H21.083333333333336V16.9625H16.9625V21.083333333333336H1.9166666666666667ZM7.4750000000000005 15.525H19.645833333333336V3.354166666666667H7.4750000000000005V15.525Z" stroke-width="1"></path>
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

                //checkmark for completing/uncompleting
                const checkDiv = document.createElement("div");
                checkDiv.className = "CompletedCheck";
                checkDiv.id = item.id;

                // Add un-complete button to todo items
                const svgContent = 

                    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24" id="Shadow-Minus--Streamline-Sharp----Material-Symbols">
                    <path fill="#7075ff" d="M1.9166666666666667 21.083333333333336V6.0375H6.0375V1.9166666666666667H21.083333333333336V16.9625H16.9625V21.083333333333336H1.9166666666666667ZM7.4750000000000005 15.525H19.645833333333336V3.354166666666667H7.4750000000000005V15.525ZM9.822916666666668 10.302083333333334V8.864583333333334H17.010416666666668V10.302083333333334H9.822916666666668Z" stroke-width="1"></path>
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
                itemsListCompleted.appendChild(todoItem);
            }
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

    // add complete button functionality (accesses task.js)
    const checkboxes = document.getElementsByClassName("CompleteCheck");

    //check if checkboxes exist
    if(checkboxes[0] !== undefined){
        for(const checkbox in checkboxes){

            //find id
            const check = document.getElementById(checkboxes[checkbox].id);

            if(check !== null){
                check.addEventListener("click", (event) => {

                    let Name = 'error';
                    const Id = checkboxes[checkbox].id;

                    for(const item of todoList){

                        if(item.id == Id){
                            Name = item.name;
                            break;
                        }

                    }

                    //call object function to change status in database
                    task.status(Id, Name, true);

                    // reload the current page
                    window.location.reload();
            
                })
            }
        }
    }

     // add un-complete button functionality (accesses task.js)
     const completedCheckboxes = document.getElementsByClassName("CompletedCheck");

     if(completedCheckboxes[0] !== undefined){
         for(const checkbox in completedCheckboxes){
 
             //find id
             const check = document.getElementById(completedCheckboxes[checkbox].id);
 
             if(check !== null){
                 check.addEventListener("click", (event) => {

                     let Name = "error";
                     const Id = completedCheckboxes[checkbox].id;
 
                     for(const item of todoList){

                        if(item.id == Id){
                            Name = item.name;
                            break;
                        }

                    }
 
                    //call object function to change status in database
                     task.status(Id, Name, false);
 
                     // reload the current page
                     window.location.reload();
             
                 })
             }
         }
     }
}

export { displayTasks };