//Basic DOM structure to interface with HTML elements

document.querySelector('.add-task').addEventListener('click', addTask);

function addTask () {
    const taskInput = document.querySelector('.input-text');
    const taskList = document.querySelector('.show-tasks');

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

//Need to add DOM JS for filtering completed and on going tasks