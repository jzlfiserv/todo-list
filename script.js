// add task functionality
function addTask() {
    // get the input field and task list elements
    let taskInput = document.getElementById("new-task");
    let taskList = document.getElementById("incomplete-tasks");

    // console.log('taskInputs value: ', taskInput.textContent);
    
    // check if input field is not empty or contains only whitespace
    if (taskInput.value.trim() != "") {
        // create a new list item

        let li = document.createElement("li"); 
        let lab = document.createElement("label");
        lab.innerHTML = taskInput.value;
        li.appendChild(lab);
       
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            deleteTask(li);
        };
        li.appendChild(deleteButton);


        let completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.onclick = function () {
            completeTask(li);
        };
        li.appendChild(completeButton);

        
        // display the list item to the task list
        taskList.appendChild(li);

        // clear the input field
        taskInput.value = "";
    }
}




function completeTask(taskItem) {
    let incompleteTasks = document.getElementById("incomplete-tasks");
    let completedTasks = document.getElementById("completed-tasks");
 

    taskItem.removeChild(taskItem.querySelector("button")); 
    taskItem.removeChild(taskItem.querySelector("button")); 

    completedTasks.appendChild(taskItem);
}

function clearTasks(){ 
    let taskList = document.querySelectorAll("#completed-tasks li");
    Array.from(taskList).forEach((li)=>
    {
        li.parentNode.removeChild(li);
    });
}



// delete task functionality

function deleteTask(taskItem){
    let incompleteTasks = document.getElementById("incomplete-tasks");
    let completedTasks = document.getElementById("completed-tasks");
 
    // remove Edit and Complete buttons
    taskItem.removeChild(taskItem.querySelector("button")); // Edit button
 
    // move the task item to completed tasks
    incompleteTasks.removeChild(taskItem);
}
