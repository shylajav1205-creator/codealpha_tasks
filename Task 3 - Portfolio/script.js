// Portfolio loaded message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
});

// Project cards hover interaction
const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {
    project.addEventListener("click", function () {
        project.style.transform = "scale(1.03)";
        
        setTimeout(function () {
            project.style.transform = "";
        }, 200);
    });
});