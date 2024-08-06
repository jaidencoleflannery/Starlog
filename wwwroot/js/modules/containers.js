function containers(){
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
}

export { containers };