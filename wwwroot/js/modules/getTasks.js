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