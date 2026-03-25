let task = document.querySelectorAll(".task-item")
let checkbox = document.querySelectorAll(".checkbox")
let Dalte  = document.querySelectorAll(".delete-btn")
let list = document.querySelector(".task-list")
let addtask = document.querySelector(".add-task")
let btn_add = document.querySelector(".add-btn")

function displayTask(){
    let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    const list = document.querySelector(".task-list")
    list.innerHTML=""
tasks.forEach(item => {
        add_takes(item); 
    });}

function add_takes(hello){
    if(!hello)return;
    let tasitem = document.createElement("div")
    tasitem.className = "task-item"

let input = document.createElement("input")
    input.className = "checkbox"
    input.type = "checkbox"

    let span = document.createElement("span")
    span.textContent=hello

let button = document.createElement("button")
    button.className = "delete-btn"
let score =1;
    let icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
    
input.addEventListener("change", () => {
    localStorage.setItem("d",`line`) 

        tasitem.classList.toggle("line"); 
  if(!input.checked){
localStorage.removeItem("d")
   }
        // score++
    });
       let l =  localStorage.getItem("d")
     if(l){
        tasitem.classList.add(l)
        input.checked=true
        
    }
  
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
}


function saveToStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    tasks.push(text);
    localStorage.setItem("allTasks", JSON.stringify(tasks));
}

btn_add.addEventListener("click", () => {
    let val = addtask.value.trim(); 
    if (val === "") return; 

    saveToStorage(val);

    add_takes(val); 

    addtask.value = ""; 
});

document.body.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
          let val = addtask.value.trim(); 
    if (val === "") return; 

    saveToStorage(val);

    add_takes(val); 

    addtask.value = ""; 

    }
})



checkbox.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.parentElement;
    targetTask.classList.toggle("line")
    localStorage.setItem("claslist",'kidk')
    
})
});
 
Dalte.forEach(button => {
    button.addEventListener("click", (e) => {
        let targetTask = e.target.closest(".task-item");
        
        if (targetTask) {
            let textToDelete = targetTask.querySelector("span").textContent;

            targetTask.remove(); 

            let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
            let newTasks = tasks.filter(item => item !== textToDelete);
            
            localStorage.setItem("allTasks", JSON.stringify(newTasks));
        }
    });
});


displayTask()




// i have do loop to the remove word to storge array