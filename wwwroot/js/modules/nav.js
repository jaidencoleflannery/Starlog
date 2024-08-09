import * as task from './tasks.js';

//adds add, remove, and clearall functionality to nav dropdown, calling tasks.js for functionality
function nav(){

    //check if the add/remove/clearall form exists, if yes, remove it
    const navExists = document.getElementById("NavFormEmpty");
    if(navExists){
        navExists.remove();
    }

    //form to hold user input(generates on click)
    const navForm = document.createElement("div");
    navForm.id = "NavFormEmpty";

    //add form

    //add functionality to the "add" nav button
    const add = document.getElementById("AddOption");
    
    add.addEventListener("click", (event) => {

        //if menu is already filled, remove menu contents
        let cursor = document.getElementById("FormContainer");
            if(cursor){
                cursor.remove();
            }

        //'#NavForm' contains styling that will make the parent div appear
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

                let taskInput = document.getElementById("AddTaskInput");
                let completed = document.getElementById("AddCompletedCheckbox").checked;

            // post supplied data
            task.post(taskInput.value, completed)

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

                let id = document.getElementById("RemoveId");
                let taskInput = document.getElementById("RemoveTaskInput");

            if(id.value !== undefined){

                //remove supplied data
                task.remove(id.value);

                        //remove menu
                        let cursor = document.getElementById("NavForm");
                        cursor.remove();

                        location.reload();
            }

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
            task.clearAll();
                        
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

export { nav };