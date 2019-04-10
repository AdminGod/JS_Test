function removeIframe() {
    try {
        document.getElementById("iFrame").remove();
    } catch (e) {
        console.log("iframe not found");
    }
}

function showIframe(less) {
    removeIframe();

    let url = getUrl().url;
    let iframe = document.createElement("iframe");

    iframe.setAttribute("id", "iFrame");
    iframe.setAttribute("src", url);
    iframe.setAttribute("style", "width: 600px; height: 500px");
    document.body.appendChild(iframe);
}

function getUrl() {
    let fileUrl;
    let taskAmount = 0;
    switch (document.getElementById("lesson").value) {
        case "Less2" :
            fileUrl = "https://drive.google.com/file/d/175kF8ZFIZ68POahdp4WgUDTDhUnNmYrJ/preview";
            taskAmount = 10;
            break;
        case "Less3" :
            fileUrl = "https://drive.google.com/file/d/1ajJdLvtKu7CNdsTc4Uag1ZBl7nDd21LP/preview";
            taskAmount = 21;
            break;
    }
    return {url: fileUrl, lessons: taskAmount};
}

function getTaskListForLesson() {

    let tasksAmount = getUrl().lessons;

    let select = document.createElement("select");
    select.setAttribute("id", "tasks");
    for (let i = 1; i <= tasksAmount; i++) {
        let opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Lesson " + i));
        opt.value = "Lesson " + i;
        select.appendChild(opt);
    }

    removeTasks();
    document.getElementById("taskHeader").appendChild(select);
}

function removeTasks(){
    try {
        document.getElementById("tasks").remove();
    }catch (e) {
        console.log("select not found");
    }
}