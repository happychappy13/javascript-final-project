/*
Senior Fitness with Amanda - Home Page
   	   Filename: index.html

   	  	Author: Amanda Chappell
   	  	Date: 03/30/20
          HTML5 and CSS3 Final Project
*/

var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
    navButton.addEventListener("click", function() {
        var nav = document.querySelector(".sitenavigation ul");
        if (nav.style.display === "block") {
            nav.style.display = "";
        } else {
            nav.style.display = "block";
        }
    }, false);
}  else if (navButton.attachEvent) {
    navButton.attachEvent("onClick", function() {
        var nav = document.querySelector(".sitenavigation ul");
        if (nav.style.display === "block") {
            nav.style.display = "";
        } else {
            nav.style.display = "block";
        }
    });
}