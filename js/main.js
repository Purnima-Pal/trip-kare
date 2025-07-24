// script for close btn
let popup1CloseBtn = document.getElementById("popup1_close_btn");
let getpopup1 = document.querySelectorAll(".popup1");
popup1CloseBtn.addEventListener("click",function(){
   getpopup1[0].style.display="none";
})

// script for email icon
let getEmailIcon = document.getElementById("Email_icon");
let getMobileLogin = document.getElementById("mobile_login");
let getEmailLogin = document.getElementById("Email_login");
let getLogwithMobbtn = document.getElementById("log_with_mob");
getLogwithMobbtn.style.display = "none";
getEmailLogin.style.display ="none";

getEmailIcon.addEventListener("click",function(){
   getMobileLogin.style.display ="none";
   getEmailLogin.style.display ="block";
   getEmailIcon.style.display ="none";
   getLogwithMobbtn.style.display = "block";
})

getLogwithMobbtn.addEventListener("click",function(){
   getMobileLogin.style.display ="block";
   getEmailLogin.style.display ="none";
   getEmailIcon.style.display ="block";
   getLogwithMobbtn.style.display = "none"; 
})