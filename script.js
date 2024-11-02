//Basic DOM structure to interface with HTML elements

document.querySelector('.add-task').addEventListener('click', addTask);
document.querySelector('.filter-completed').addEventListener('click', filterCompleted);
document.querySelector('.filter-on-going').addEventListener('click', filterOnGoing);

const taskInput = document.querySelector('.input-text');
const taskList = document.querySelector('.show-tasks');


function addTask () {
   

    if(taskInput.value.trim() !== '') {

        // If input is not equal to '' create two elements.
        // The first being li and the second being checkbox.
        
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        
        // Assigning the checkbox variable the type of checkbox.
        checkbox.type = 'checkbox';

        // Checkbox onclick event handler.
        checkbox.onclick = function () {

            // If checkbox is checked is equal to true add a li element with class "completed".
            if(this.checked) {
                li.classList.add('completed');
                
                // If not checked remove the class "completed". 
            } else {
                li.classList.remove('completed'); 
            }
        };

        // Append a checkbox on the li element 
        li.appendChild(checkbox);

        // Append the taskInput value along with the checkbox
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

// Filter section

// Assign the children of the parent element taskList the variable tasks. 
let tasks = taskList.children;

function filterCompleted(){
    
// Loop through the array of tasks.
    for(let task of tasks){
        if(task.classList.contains('completed')){
            task.style.display = ''
        } else {
            task.style.display = 'none';
        }
    }
}


// Same logic applied for the on going tasks.
function filterOnGoing(){
    

    for(let task of tasks){
        if(!task.classList.contains('completed')){
            task.style.display = ''
        } else {
            task.style.display = 'none';
        }
    }
}