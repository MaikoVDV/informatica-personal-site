// Style navbar elements to show what page the user is on
function styleNavbar() {
    let currentPath = window.location.href;
    let navbarElements = Array.from(document.getElementById("main-navbar").children);
    navbarElements.forEach(navbarButton => {
        if(navbarButton.href == currentPath) {
            navbarButton.className = "current-page";
        }
    });
}