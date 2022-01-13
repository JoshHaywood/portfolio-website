function ToggleNavLinks() { //Function to toggle navigation links display
    var navLink = document.getElementById("navLinks"); //Gets ID element
    if (navLink.style.display === "none") { //If currently not displayed
        navLink.style.display = "flex"; //Set display to flex
    } 
    else {
        navLink.style.display = "none"; //Else leave display as none
    }
}