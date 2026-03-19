let task = document.querySelectorAll(".task-item")
let checkbox = document.querySelectorAll(".checkbox")
let Dalte  = document.querySelectorAll(".delete-btn")
let list = document.querySelector(".task-list")

function cr(hello){
    let tasitem = document.createElement("div")
    tasitem.className = "task-item"

let input = document.createElement("input")
    input.className = "checkbox"
    input.type = "checkbox"

    let span = document.createElement("span")
    span.textContent=hello

let button = document.createElement("button")
    button.className = "delete-btn"

    let icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
input.addEventListener("change", () => {
        tasitem.classList.toggle("line");
    });
button.addEventListener("click", () => {
        tasitem.addEventListener("transitionend", () => {
            tasitem.remove();
        });
    });
    
list.appendChild(tasitem)
tasitem.appendChild(input)
tasitem.appendChild(span)
tasitem.appendChild(button)
button.appendChild(icon)

console.log(button)


}

cr("ie")

checkbox.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.parentElement;
    targetTask.classList.toggle("line")
    
})
});
 
Dalte.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.closest(".task-item");

    if(targetTask)
        {
   targetTask.remove()
}   
})
});
