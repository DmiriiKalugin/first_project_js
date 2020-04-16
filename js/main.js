const task_form = document.querySelector("#newTaskForm");
input = document.querySelector("#addNewTask");
const task_list = document.querySelector("#list-group");


task_form.addEventListener("submit", function(event){
    event.preventDefault();

    const taskText = input.value.trim(); 
    

    const task_html = `<li class="list-group-item d-flex justify-content-between"><span class="task-title">${taskText}</span>
        <span>
            <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
            <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button></li>
        </span>`;

    task_list.insertAdjacentHTML("afterbegin", task_html);


    input.value = "";

    input.focus();

    showNotification("new");
    
    toggleEmptyListItem();

    
});


task_list.addEventListener("click", function(event){
    if (event.target.getAttribute("data-action") == "delete-task") {
        event.target.closest(".list-group-item").remove();      
        showNotification("delete");

        toggleEmptyListItem();
    } else if (event.target.getAttribute("data-action") == "ready"){
        const parentElement = event.target.closest(".list-group-item");

        parentElement.querySelector(".task-title").classList.add("task-title--done");

        task_list.insertAdjacentElement("beforeend", parentElement);

        event.target.remove();

        showNotification("success");
    } 
});

function toggleEmptyListItem (){
    if (task_list.children.length > 1) {
        document.querySelector("#empty-list-item").style.display = "none"; 
    } else {
        document.querySelector("#empty-list-item").style.display = "block"; 
    }

    
}

function showNotification(type){

    let newElement = document.createElement("div");

    switch(type) {
        case "new" :
            newElement.classList = "alert alert-warning";
            newElement.textContent = "Задача добавлена!";
            break;

        case "delete" : 
            newElement.classList = "alert alert-danger";
            newElement.textContent = "Задача удалена!";
            break;
        
        case "success" :
            newElement.classList = "alert alert-success";
            newElement.textContent = "Задача выполнена!";
            break;
    }


    document.querySelector("#notifyHolder").insertAdjacentElement("afterbegin", newElement);

    setTimeout(function(){
        
        
        newElement.style.opacity = "1";


    }, 300);

    setTimeout(function(){
        
        
        newElement.style.opacity = "0";


    }, 2300);

    setTimeout(function(){
        
        
        newElement.remove;


    }, 2600);
    
    
}




