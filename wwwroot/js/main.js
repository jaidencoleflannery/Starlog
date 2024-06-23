window.onload = function() {

    TitleColor();
    Add();

  };




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
        });

        cursor.addEventListener("mouseout", (event) => {
            cursor.style.color = ['#FFF'];
        });

        counter = counter + 1;
    }

}




function Add(){
    //find button
    const addButton = document.getElementById('add');

    //add div for add when button is clicked
    addButton.addEventListener("click", (event) => {
        addCheck = document.getElementById('addDiv');
            if(addCheck){
                    addCheck.remove();
            }

        const addDiv = document.createElement("div");
        addDiv.id = "addDiv";

        add = document.getElementById('add');
        add.append(addDiv);

        //check for placement and then append to page
    const placement = document.getElementById('add');
    if(placement){
        const main = document.getElementById("main")
            if(main){
                main.insertBefore(add, placement);
            } else{
                console.log("ERROR: main not found.")
            }
        } else{
            console.log("ERROR: placement not found for add dropdown.")
        }

        const addDivAfter = document.getElementById('addDiv');
    
    console.log(addDiv);
    addDivAfter.addEventListener("mouseout", (event) => {
        console.log("off");
            addDiv.remove();
        });

    });
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

    //check if any todo items exist, if none exist then tell user
    if(todoList.length == 0){
        const todoItemEmpty = document.createElement("div");
        todoItemEmpty.id = "EmptyTodoItem";
        todoItemEmpty.className = "TodoItem";

        const emptyItemString = ("No TODO Tasks Found");
        let emptyItem = document.createTextNode(emptyItemString);

        const emptyItemIdContainer = document.createElement("div");
        emptyItemIdContainer.className = "TodoItemId";
        const emptyItemIdInt = 0;
        let emptyItemId = document.createTextNode(emptyItemIdInt);

        emptyItemIdContainer.append(emptyItemId);
        todoItemEmpty.append(emptyItemIdContainer);
        console.log(emptyItemIdContainer);
        todoItemEmpty.appendChild(emptyItem);    
        
        //append the todo item into its container
        itemsList.appendChild(todoItemEmpty);
    
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
            checkDiv.className = "svgContainer";

            // Add checkmarks to todo items
            const svgContent = 
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/>
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
    console.log(itemsListCompleted);

}