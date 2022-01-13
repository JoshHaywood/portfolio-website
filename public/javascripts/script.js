function ToggleNavLinks() { //Function to toggle navigation links display
    var navLink = document.getElementsByClassName("nav-links")[0]; //Gets first instance of class name
    
    if (window.getComputedStyle(navLink).display === "none") { //If currently not displayed, computed style is used to ensure element is set to none
        navLink.style.display = "flex"; //Set display to flex
    } 
    else {
        navLink.style.display = "none"; //Else leave display as none
    }
}