// script for close btn
let popup1CloseBtn = document.getElementById("popup1_close_btn");
let getPopup1 = document.getElementById("popup1");
popup1CloseBtn.addEventListener("click",function(){
   getPopup1.style.display="none";
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


// script for popup Tab Button

let getPopUpBtn1 = document.querySelectorAll(".popup1_tab_btn button");
let getPopUp1content = document.querySelectorAll(".popup_tab_content");
let getPopUp1Img = document.querySelectorAll(".popup_img_wrap img");
getPopUp1content.forEach((conetctItemshow, index)=>{conetctItemshow.style.display = index === 0 ? "block":"none"});
getPopUp1Img.forEach((imgShow, index) =>{imgShow.style.display = index === 0?"block":"none"});
    getPopUpBtn1.forEach((btnItemAdd,index) =>{
      btnItemAdd.addEventListener("click",function(){
      getPopUpBtn1.forEach(btnItemRemove => btnItemRemove.classList.remove("active"));
      btnItemAdd.classList.add("active");
      getPopUp1content.forEach(conetctItemRemove =>conetctItemRemove.style.display ="none");
      getPopUp1content[index].style.display ="block";
      getPopUp1Img.forEach((imgItemRemove)=>imgItemRemove.style.display ="none");
      getPopUp1Img[index].style.display ="block";
      if(btnItemAdd.classList.contains("active") && index === 1){
       popup1CloseBtn.style.display = "none" ; 
      } else{
         popup1CloseBtn.style.display = "block" ; 
      }
   })
    })


          // script for forgot_btn
   let getForgotBtn = document.getElementById("forgot_btn");
   let getPopUp2 = document.getElementById("popup2");
   getPopUp2.style.display="none";
   getForgotBtn.addEventListener("click", function(){
   getPopup1.style.display="none";
   getPopUp2.style.display="flex";
   })

   // script for backbtn
   let getBackbtn = document.getElementById("popup2_backbtn");
   getBackbtn.addEventListener("click",function(){
   getPopup1.style.display="flex";
   getPopUp2.style.display="none";
   })


 


    
