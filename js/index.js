//so when we scroll we want navbar styles should change
window.addEventListener("scroll",()=>{ //we use window object and we add an event scroll means when someone will scroll 
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>0)//classList property allows you to add , remove , toggle classes in the list , like here we have used toggles so it allows adding or removing the CSS classes that exit in your array or not. So if the class list already contains the class name then toggle() method removes it from the class list but if the class list does not contain the class name then it adds to the class list. So here we didt have window-scroll class so toggle adds it to the class list.So whenever we scroll then event triggers. windowscrollY gives us the valaue or number of how much we have scrolled so suppose when we give window.scrollY>100 it means when we have scrolled 100 px in y direction then ater scrolling for 100 px all the properties of the window-scroll class will be applied. So here when we scroll event triggers and inside nav elementwe add class window-scroll and we call class window-scroll.
})


//so when we click on hamburger then we should see the content of the nav menu
const menu=document.querySelector(".nav__menu")
const menuBtn=document.querySelector("#open-menu-btn")
const closeBtn=document.querySelector("#close-menu-btn")

//so we add event listener
menuBtn.addEventListener("click",()=>{ //so we add an event click
    menu.style.display="flex";
    closeBtn.style.display="inline-block"; //so we want when we click on menu button then content should appear and a cross button should also appear
    menuBtn.style.display="none"; //so we do its display as none so that menu buttom dissapears and close button should appear
})

//when we click on menu button the content appears and a close button appears so when we click on close button then the content should be not seen
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block"
}
closeBtn.addEventListener("click",closeNav)//so we add a click event listener and we we click on close button the event should trigger and should call closeNav




// -------------------------------------------------

// //for login page having eye icon to show and hide password-------------------------------------------------
// const container = document.querySelector(".container"),//grabbing element having class forms
//       pwShowHide = document.querySelectorAll(".showHidePw"), //grabbing all elements having class eye-icon
//       pwFields= document.querySelectorAll(".password"); //grabbing all elements having class password

// pwShowHide.forEach(eyeIcon => { //lets write code for showing and hiding password by clicking on that eye icon
//     eyeIcon.addEventListener("click", () => { //adding click event listener when someone clicks on the eye icon
//         pwFields.forEach(pwField => {
//             if(pwField.type === "password"){
//                 pwField.type = "text";
//                 pwShowHide.forEach(icon=>{
//                     icon.classList.replace("uil-eye-slash" , "uil-eye");
//                 })
//             }
//             else{
//                 pwField.type = "password";
//                 pwShowHide.forEach(icon=>{
//                     icon.classList.replace("uil-eye", "uil-eye-slash");
//                 })
//             }
//         })
//     })
// })      
