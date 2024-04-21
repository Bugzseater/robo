
document.addEventListener('DOMContentLoaded', function() {
 const titleElement = document.querySelector('.title h1');
 const titleText = titleElement.innerText;
 let index = 0;

 function displayTitle() {
     if (index < titleText.length) {
         titleElement.innerText = titleText.slice(0, index + 1);
         index++;
         setTimeout(displayTitle, 100); // Adjust typing speed here (in milliseconds)
     } else {
         // Animation complete, reset index and restart animation
         index = 0;
         setTimeout(displayTitle, 2000); // Wait for 2 seconds before restarting
     }
 }

 displayTitle(); // Start the typing animation initially

});






