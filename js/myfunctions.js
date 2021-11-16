(function () {
    'use script';

    class Task {
        constructor(title, description, priority) {
            this.title = title;
            this.description = description;
            this.priority = priority;
        }
    }

    const taskList = [];

    function newTask() {
        const titleName = document.getElementById("Title").value.trim();
        const titleDesc = document.getElementById("Description").value.trim();

        let errorMsg = validInput(titleName, titleDesc);
        if (errorMsg.length === 0) {
            let newTask = new Task(titleName, titleDesc, document.getElementById("checkme").checked);
            taskList.push(newTask);
            document.getElementById("Title").value = "";
            document.getElementById("Description").value = "";

        }
        document.getElementById("Error-messages").innerText = errorMsg.join(', ');
        if (taskList)
            printList();

        let deleteButtons = document.getElementsByClassName("deleteButton");
        for (let button of deleteButtons)
            button.addEventListener('click', function (event) {
                const index = taskList.findIndex(ele => ele.title == event.target.parentElement.firstElementChild.innerHTML)
                event.target.parentElement.remove();
                taskList.splice(index, 1);
            });
    }

    function validInput(title, description) {
        const messages = [];
        if (title === '' || title == null)
            messages.push("You must insert a title");

        else if (description === '' || description == null)
            messages.push("You must insert a description");

        for (let item of taskList)
            if (title === item.title)
                messages.push("This task already exists");

        return messages;
    }


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
        t.priority ? ret += "<div class='col-12 bg-danger text-dark'>" :
            ret += "<div style='background: pink' class='col-12 not-priority text-dark'>";
        ret += "<li><h3><strong>" + t.title + "</strong></h3><h4>" +
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
        document.getElementById("add").addEventListener('click', newTask);
        document.getElementById("sort").addEventListener('click', sortList);
        document.getElementById("high").addEventListener('click', hidden);

    })

    function hidden() {
        showPriority();
        document.getElementById("sort").classList.toggle('d-none');
        document.getElementById("inputSection").classList.toggle('d-none');
        if (document.getElementById("high").innerText != "back")
            document.getElementById("high").innerText = "back";
        else
            document.getElementById("high").innerText = "Show High Priority";

        let list = document.getElementById("tasksToDo").//clear textbox
            getElementsByClassName("bg-light");//print task

        for (let item of list)
            item.classList.toggle('d-none');
    }
})();