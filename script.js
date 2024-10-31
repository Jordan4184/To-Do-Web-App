//Basic DOM structure to interface with HTML elements

document.querySelector('.add-task').addEventListener('click', addTask);

function addTask () {
    const taskInput = document.querySelector('.input-text');
    const taskList = document.querySelector('.show-tasks');

    if(taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function () {
            if(this.checked) {
                li.classList.add('completed'); 
            } else {
                li.classList.remove('completed'); 
            }
        };

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

//Need to add DOM JS for filtering completed and on going tasks