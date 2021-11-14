class Task {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }
}

const submit = document.getElementById("add");
let taskList = [];
submit.addEventListener('click', function () {
    const titleName = document.getElementById("textbox").value;
    const titleDesc = document.getElementById("Description").value;
    const isPriority = document.getElementById("checkme").checked;
    console.log(isPriority);
    //check
    let newTask = new Task(titleName, titleDesc, isPriority);
    taskList.push(newTask);
    printList();
    let deleteButtons = document.getElementsByClassName("deleteButton");
    for (let but of deleteButtons)
        but.addEventListener('click', function (event) {
            const index = taskList.findIndex(ele => ele.title == this.parentElement.firstElementChild.innerHTML)
            //console.log(index)
            //console.log(event.target.parentElement.firstElementChild.innerHTML);
            this.parentElement.remove();
            taskList.splice(index,1);
            //console.log(listOfTasksJS)
        } );

})
function printList()
    {
        let htmlList = document.getElementById('taskstoddo');
        htmlList.innerHTML = "<div id = 'taskstoddo'>";
        for(let task of taskList)
            {
                htmlList.innerHTML+= printTask(task);
            }
        htmlList.innerHTML +="</div>";
        console.log(htmlList);
    }
function printTask(t) {
    let ret = "<h3>" + t.title + "</h3>";
    ret += "<h4> " +t.description + "</h4>";
    ret +=  "<button class = 'deleteButton'>delete</button> ";
    return ret;
}

    //clear textbox
    //print task


function deleteTask(event) {

    event.target.parentElement.remove();
}

/*function errorMessage(msg) {
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