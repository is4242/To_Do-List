let task = document.querySelectorAll(".task-item")
let checkbox = document.querySelectorAll(".checkbox")
let Dalte  = document.querySelectorAll(".delete-btn")
let list = document.querySelector(".task-list")
let addtask = document.querySelector(".add-task")
let btn_add = document.querySelector(".add-btn")

<<<<<<< HEAD

function add_takes(hello){
    if(addtask.value === "")return;
=======
function displayTask(){
    let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    const list = document.querySelector(".task-list")
    list.innerHTML=""
tasks.forEach(item => {
        add_takes(item); 
    });}

function add_takes(hello){
    if(!hello)return;
>>>>>>> DIR
    let tasitem = document.createElement("div")
    tasitem.className = "task-item"

let input = document.createElement("input")
    input.className = "checkbox"
    input.type = "checkbox"

    let span = document.createElement("span")
    span.textContent=hello

let button = document.createElement("button")
    button.className = "delete-btn"
<<<<<<< HEAD

    let icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
input.addEventListener("change", () => {
        tasitem.classList.toggle("line");
    });
=======
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
  
>>>>>>> DIR
button.addEventListener("click", () => {
        tasitem.addEventListener("transitionend", () => {
            tasitem.remove();
        });
    });
<<<<<<< HEAD
    addtask.value = ""
=======

>>>>>>> DIR
list.appendChild(tasitem)
tasitem.appendChild(input)
tasitem.appendChild(span)
tasitem.appendChild(button)
button.appendChild(icon)
<<<<<<< HEAD



}

btn_add.addEventListener("click",()=>{
    add_takes(addtask.value)
})

document.body.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        add_takes(addtask.value)
=======
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

>>>>>>> DIR
    }
})



checkbox.forEach(button => {
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.parentElement;
    targetTask.classList.toggle("line")
<<<<<<< HEAD
=======
    localStorage.setItem("claslist",'kidk')
>>>>>>> DIR
    
})
});
 
Dalte.forEach(button => {
<<<<<<< HEAD
   button.addEventListener("click",(e)=>{
    let targetTask = e.target.closest(".task-item");

    if(targetTask)
        {
   targetTask.remove()
}   
})
});
=======
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
>>>>>>> DIR
