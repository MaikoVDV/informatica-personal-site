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
window.addEventListener('resize', function(event) {
    aboutPageResize()
}, true);
// Making the about page responsive
function aboutPageResize() {
    const bigFace = "assets/gigachad.jpg"
    const smallFace = "assets/gigachad_smol.jpg"
    if(window.innerWidth <= 1000) {
        document.getElementById("maiko-face").src = smallFace;
    } else {
        document.getElementById("maiko-face").src = bigFace;
    }
}