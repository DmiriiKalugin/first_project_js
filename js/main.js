const task_form = document.querySelector("#newTaskForm");
const task_list = document.querySelector("#list-group");


task_form.addEventListener("submit", function(event){
    event.preventDefault();

    const input = document.querySelector("#addNewTask"); 
    const task_text = input.value; 
    

    const task_html = `<li class="list-group-item d-flex justify-content-between"><span class="task-title">${task_text}</span>
    <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button></li>`;


    task_list.insertAdjacentHTML("afterbegin", task_html);

    input.value = '';
});


task_list.addEventListener("click", function(event){
    if (event.target.getAttribute("data-action") == "delete-task") {
        event.target.parentElement.remove();        
    }
});