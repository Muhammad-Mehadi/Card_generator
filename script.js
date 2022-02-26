function Generate() {
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var university = document.getElementById("university").value;
    if (name == "" || department == "" || university == "") {
        document.getElementById("card").classList.add("hide");
        if (name == "") {
            document.getElementById("name").style.border = "solid red";
        } else {
            document.getElementById("name").style.border = "solid black";
        }
        if (department == "") {
            document.getElementById("department").style.border = "solid red";
        } else {
            document.getElementById("department").style.border = "solid black";
        }
        if (university == "") {
            document.getElementById("university").style.border = "solid red";
        } else {
            document.getElementById("university").style.border = "solid black";
        }
    } else {
        document.getElementById("name").style.border = "solid black";
        document.getElementById("department").style.border = "solid black";
        document.getElementById("university").style.border = "solid black";
        console.log(name + department + university);
        document.getElementById("card").classList.remove("hide");
        document.getElementById("nameID").innerText = "Name: " + name;
        document.getElementById("departmentID").innerText =
            "Department: " + department;
        document.getElementById("universityID").innerText =
            "University: " + university;
    }
}