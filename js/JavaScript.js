function formvalidate() {


    var name = document.forms['myform']['firstname'].value;
    if (name == "" || name == null) {
        alert("first name field can't be Empty");
        return false;
    }

    var name = document.forms['myform']['lastname'].value;
    if (name == "" || name == null) {
        alert("last name field can't be Empty");
        return false;
    }

    var name = document.forms['myform']['country'].value;
    if (name == "" || name == null) {
        alert("country can't be Empty");
        return false;
    }

    var name = document.forms['myform']['subject'].value;
    if (name == "" || name == null) {
        alert("subject field can't be Empty");
        return false;
    }


}
document.querySelector("#maincontent > div.columns.container > div > div.about-us-page.row > div > p:nth-child(2) > span")
document.querySelector("#maincontent > div.columns.container > div > div.about-us-page.row > div > p:nth-child(3) > span")
document.querySelector("#maincontent > div.columns.container > div > div.about-us-page.row > div > p:nth-child(4) > span")
document.querySelector("#maincontent > div.columns.container > div > div.about-us-page.row > div > p:nth-child(5) > span")
document.querySelector("#maincontent > div.columns.container > div > div.about-us-page.row > div > p:nth-child(6) > span")
