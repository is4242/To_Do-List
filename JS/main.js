
let checkbox = document.querySelectorAll(".checkbox")
let task = document.querySelectorAll(".task-item")

let Dalte  = document.querySelectorAll(".delete-btn")





Dalte.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.parentElement;
   targetTask.remove()
    
})
});








checkbox.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.parentElement;
    targetTask.classList.toggle("line")
    
})
});
 
