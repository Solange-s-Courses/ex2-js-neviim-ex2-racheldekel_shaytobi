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
            const index = taskList.findIndex(ele => ele.title == event.target.parentElement.firstElementChild.innerHTML)
            //console.log(index)
            //console.log(event.target.parentElement.firstElementChild.innerHTML);
            event.target.parentElement.remove();
            taskList.splice(index,1);
            //console.log(listOfTasksJS)
        } );

})
function printList()
    {
        let htmlList = document.getElementById('taskstoddo');
        htmlList.innerHTML = "<ol id = 'taskstoddo'>";
        for(let task of taskList)
            {
                htmlList.innerHTML+= printTask(task);
            }
        htmlList +="</ol>";
        console.log(htmlList);
        let color = document.getElementsByTagName('li')
        for( let c of color)
        {
            for(let p of taskList) {
                if (p.title == c.firstElementChild.innerHTML)
                    //const index = taskList.findIndex(el => el.title == c.firstElementChild.innerHTML);
                    console.log(c.firstElementChild.innerHTML);


                    }
        }
    }
function printTask(t) {
    let ret = "<li><h3>" + t.title + "</h3>";
    ret += "<h4> " +t.description + "</h4>";
    ret +=  "<button class = 'deleteButton bg-warning text-dark'>delete</button> ";
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