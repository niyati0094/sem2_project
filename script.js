function saveData(){

    localStorage.setItem("name",
    document.getElementById("name").value);

    localStorage.setItem("photo",
    document.getElementById("photo").value);

    localStorage.setItem("about",
    document.getElementById("about").value);

    localStorage.setItem("education",
    document.getElementById("education").value);

    localStorage.setItem("skills",
    document.getElementById("skills").value);

    localStorage.setItem("projects",
    document.getElementById("projects").value);

    localStorage.setItem("email",
    document.getElementById("email").value);

    localStorage.setItem("phone",
    document.getElementById("phone").value);

    window.location.href = "portfolio.html";
}