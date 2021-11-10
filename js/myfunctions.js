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
/*    console.log(titleName);
    console.log(titleDesc);*/
    //check
    let newTask = new Task(titleName,titleDesc,true);
    taskList.push(newTask);
    let cardTitle = document.createElement("h5");
    let cardDescription  = document.createElement("h6");
    //delete button
    cardTitle.appendChild(document.createTextNode(titleName));
    cardDescription.appendChild(document.createTextNode(titleDesc));
    let card = document.createElement("div");
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    let placeForTasks = document.getElementById("taskstoddo");
    placeForTasks.appendChild(card);
    console.log(taskList);
    //clear textbox
    //print task

})

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