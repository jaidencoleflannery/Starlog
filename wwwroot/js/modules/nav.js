//adds add, remove, and clearall functionality to nav dropdown
function nav(){

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
                                            body: JSONdata // convert the data to a JSON string
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

export { nav };