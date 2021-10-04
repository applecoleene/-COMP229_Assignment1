// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

var nbar = document.querySelector('nav');
var bannerPicture = document.getElementById("banner");

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nbar.classList.add('bg-dark', 'shadow');
        //bannerPicture.style.opacity = 1.0;
    } else {
        nbar.classList.remove('bg-dark', 'shadow');
        //bannerPicture.style.opacity = 0.5;
    }
});

function showName() {
    var fname = document.getElementById("fnamelInput").value;
    var lname = document.getElementById("lnameInput").value;
    var telPhone = document.getElementById("telInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    document.getElementById("outMod").innerHTML = "Name:  " + fname + lname + "<br>" + "Contact Number: " + telPhone + "<br>" + "Email: " + email + "<br>" + "Message: " + message;

}