const selectfaculty1=document.querySelector(".selectfaculty1")
const selectfaculty2=document.querySelector(".selectfaculty2")
const networksecurity=document.querySelector("#netsec")
const development=document.querySelector("#webdev")

//so we add an event click to display the set timetable and vire timetable options
networksecurity.addEventListener("click",()=>{ 
    selectfaculty1.style.display="flex";  //so we make it flex or by this our set timetable and view timetable will be visible
})



development.addEventListener("click",()=>{ //so we add an event click
    selectfaculty2.style.display="flex";  //so we make it flex or by this our set timetable and view timetable will be visible
})