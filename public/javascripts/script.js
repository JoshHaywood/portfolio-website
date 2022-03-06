function ToggleNavLinks() { 
    var navLink = document.getElementsByClassName('links')[0]; 
    var navBar = document.getElementsByClassName('navbar')[0]; 
    
    //If links arent displayed display
    if (window.getComputedStyle(navLink).display === 'none') { 
        navLink.style.display = 'flex';
        navBar.style.background = '#181a1d'; 
    } 

    //Else display none links
    else {
        navLink.style.display = 'none'; 
        navBar.style.background = 'none'; 
    }
};

window.addEventListener('scroll', function() {; 

    var navBar = document.getElementsByClassName('navbar')[0]; 

    //If user scrolls 1 or more pixels
    if(scrollY >= 1){ 
        navBar.style.background = '#181a1d'; 
    }

    //If user hasnt scrolled
    if (scrollY < 1) { 
        navBar.style.background = 'none'; 
    }   
});

function ScrollTop() {
    document.documentElement.scrollTop = 0; //Set scroll distance to 0
};
