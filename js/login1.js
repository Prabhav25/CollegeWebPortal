
// So here when someone will click on Timetable then he will gets options to set timetable or to view timetable 
const timetableSetView=document.querySelector(".timetableSetView")
const timetable=document.querySelector("#timetable")
const viewtimetable=document.querySelector("#viewtimetable")

//so we add an event click to display the set timetable and vire timetable options
timetable.addEventListener("click",()=>{ 
    timetableSetView.style.display="flex";  //so we make it flex or by this our set timetable and view timetable will be visible
})


//if a student clicks on view timetable without setting the timetable then he will get an aleert to set the timetable firstly in order to view it
viewtimetable.addEventListener("click",()=>{ //so we add an event click
    alert("Re-enter the credentials and set the timetable firslty in order to view it")
})
