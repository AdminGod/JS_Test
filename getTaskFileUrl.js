function getUrl() {
    let fileUrl;
    switch (document.getElementById("lesson").value) {
        case "Less2" :
            fileUrl = "https://drive.google.com/file/d/175kF8ZFIZ68POahdp4WgUDTDhUnNmYrJ/preview";
            break;
        case "Less3" :
            fileUrl = "https://drive.google.com/file/d/1ajJdLvtKu7CNdsTc4Uag1ZBl7nDd21LP/preview";
            break;
    }
    document.getElementById("iFrame").src = fileUrl;
    document.getElementById("divIframe").style = {display: 'inline'};
    setUpOpitionsOfTask();
}
