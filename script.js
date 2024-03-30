'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});






function send(){
    console.log("function call");

    Email.send({
        Host : "oalam01101973@gmail.com",
        Username : "username",
        Password : "615EA59EA3B7105A6D750BCB5C5B4D672FCE",
        To : 'jaki59991@gmail.com',
        From : "oalam01101973@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

function Send(){
          
                    
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("Contact").value;
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;

  var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> Message:" + mess;
   
  console.log(body);
   Email.send({

    SecureToken : "db739cc9-28e0-4c1a-b4b5-ff998f5ff0ed",
    To : 'Enter your Receiver mail',
    From : "Enter your Register mail on elastic",
    Subject : sub,
    Body : body
   }).then(
       message =>{
           if(message=='OK'){

               swal("Successfull", "Your Data Successfull Received", "success");
           }
           else{

               swal("Something Wrong", "Your Data is not Received", "error");
           }
       }
     );

   

}


