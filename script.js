// Add event listeners to login and register buttons
document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.querySelector(".btn:nth-child(1)");
   const registerBtn = document.querySelector(".btn:nth-child(2)");

    loginBtn.addEventListener("click", function() {
       // Login functionality will go here
       console.log("Login button clicked");
   });


  registerBtn.addEventListener("click", function() {
       // Register functionality will go here
        console.log("Register button clicked");
   });
});