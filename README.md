# javascript-final-project
# Senior Fitness with Amanda Web Page Design
## Synopsis
This is a website designed to help seniors be able to build a custom workout that they can do while stuck at home.
## Motivation
The coronavirus pandemic and social distancing inspired the creation of this website. Uses HTML, CSS, & JavaScript code.
## Code Example
This is a code snippet from my tips.html file.
```
<script>
         //change image size on mouseover and mouseout
         var cans = document.querySelector("#cans");
         var towel = document.querySelector("#towel");
         var bear = document.querySelector("#bear");

         cans.addEventListener("mouseover", hovered, false);
         cans.addEventListener("mouseout", hoveredOut, false);
         towel.addEventListener("mouseover", hover, false);
         towel.addEventListener("mouseout", hoverOut, false);
         bear.addEventListener("mouseover", hove, false);
         bear.addEventListener("mouseout", hoveOut, false);

         function hovered() {
            cans.style.width = "300px";
         }
         function hoveredOut() {
            cans.style.width = "250px";
         }
         function hover() {
            towel.style.width = "300px";
         }
         function hoverOut() {
            towel.style.width = "250px";
         }
         function hove() {
            bear.style.width = "300px";
         }
         function hoveOut() {
            bear.style.width = "250px";
         }
      </script>
```
