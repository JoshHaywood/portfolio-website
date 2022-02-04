// #region Header

function ToggleNavLinks() { //Function to toggle navigation links display
    var navLink = document.getElementsByClassName("nav-links")[0]; //Gets first instance of class name
    var navBar = document.getElementsByClassName("navbar")[0]; //Gets first instance of class name
    
    if (window.getComputedStyle(navLink).display === "none") { //If currently not displayed, computed style is used to ensure element is set to none
        navLink.style.display = "flex"; //Set display to flex
        navBar.style.background = "#181a1d"; //Sets background colour to secondary 
    } 
    else {
        navLink.style.display = "none"; //Else leave display as none
        navBar.style.background = "none"; //Sets background back to none
    }
};

window.addEventListener('scroll', function() {; //Event listener for mouse scroll

    var navBar = document.getElementsByClassName("navbar")[0]; //Gets first instance of class name

    if(scrollY >= 1){ //If user scrolls 1 pixel
        navBar.style.background = "#181a1d"; //Sets background colour to secondary
    }

    if (scrollY < 1) { //If user scroll back to the point of no scroll
        navBar.style.background = "none"; //Sets background colour back to none
    }   
});

// #endregion

// #region Footer

function ScrollTop() { //Function to scroll to top of the page
    document.documentElement.scrollTop = 0; //Sets scroll top value to 0
};

// #endregion
