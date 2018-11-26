//Navbar handlers
var nav = true;

function navPullInteract() {
    nav = !nav;
    if (!nav) {
        document.getElementById("navSide").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("main").style.webkitFilter = "blur(1px)";
    } else {
        document.getElementById("navSide").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        document.getElementById("main").style.webkitFilter = "blur(0)";
    }
}

function openNav() {

}

function closeNav() {

}

function initEvents() {
    console.log("Events being added")
    //Add another method to auto close without having to click the button
}

document.addEventListener("DOMContentLoaded", initEvents());