class Task {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }
}

const submitTask = document.getElementById("add");
let taskList = [];

submitTask.addEventListener('click', function () {
    const titleName = document.getElementById("textbox").value.trim();
    const titleDesc = document.getElementById("Description").value.trim();
    const isPriority = document.getElementById("checkme").checked;
    //if(validInput(titleName, titleDesc))
        //check for empty str and other checks
        let newTask = new Task(titleName, titleDesc, isPriority);
        taskList.push(newTask);
        /* console.log(taskList);*/
        printList();
        let deleteButtons = document.getElementsByClassName("deleteButton");

        for (let button of deleteButtons)
            button.addEventListener('click', function (event) {
                const index = taskList.findIndex(ele => ele.title == event.target.parentElement.firstElementChild.innerHTML)
                event.target.parentElement.remove();
                taskList.splice(index, 1);
            })
})

function printList() {
    let htmlList = document.getElementById('tasksToDo');
    htmlList.innerHTML = "<ol id = 'tasksToDo'>";
    for (let task of taskList) {
        htmlList.innerHTML += printTask(task);
    }
    htmlList += "</ol>";
}

function printTask(t) {

    let ret = '';
    t.priority ? ret += "<div class='col-8 bg-warning'>" : ret += "<div class='col-8 not-priority bg-info'>";
    ret += "<li><h3><strong>" + t.title + "</strong></h3><br><h4>" +
        t.description + "</h4></li>";
    ret += "<button class = 'deleteButton .bg-light.bg-gradient text-dark'>delete</button>";
    ret += "</div>";
    return ret;
}

function sortList() {
    taskList.sort((a, b) => a.title.localeCompare(b.title));
    printList();
}

function showPriority() {
    const notPriorityList = document.getElementsByClassName("not-priority");
    for (let t of notPriorityList) {
        t.classList.toggle('d-none');
    }
    document.getElementById("back").classList.toggle('d-none');
}

window.addEventListener('DOMContentLoaded', () => {
        document.getElementById("high").addEventListener('click', hidden);
        document.getElementById("back").addEventListener('click', hidden);
})

function hidden() {

    document.getElementById("high").classList.toggle('d-none');
    document.getElementById("sort").classList.toggle('d-none');
    document.getElementById("back").classList.toggle('d-none');
    document.getElementById("inputSection").classList.toggle('d-none');

    let list = document.getElementById("tasksToDo").//clear textbox
    getElementsByClassName("bg-light");//print task

    for(let item of list)
        item.classList.toggle('d-none');
}/*function errorMessage(msg) {
    document.getElementById("errormsg").innerHTML = msg;
    document.getElementById("errormsg").style.display = "block";
}

/!*
reset the error message (erase, hide)
 *!/
function resetErrorMessage() {
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById("errormsg").style.display = "none";
}*/

// let addtTask = (task) =>
// {
//     coursesList.push(task);
// }
// let deleteTask = (task) =>
// {
//     const index = coursesList.indexOf(task);
//     if(index > -1)
//         coursesList.splice(index,1);
// }
// let sortList = (taskList)
// {
//     taskList.sort();
// }