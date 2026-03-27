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
// let score =1;
    let icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
           let l =  localStorage.getItem("classtorge")
input.addEventListener("change", () => {
    localStorage.setItem("classtorge",`line`)
        tasitem.classList.toggle(`line`); 
  if(!input.checked){
localStorage.removeItem("classtorge")
   }
        // score++
    });
     if(l){
        tasitem.classList.add(l)
        input.checked=true
        
    }
  
button.addEventListener("click", (event) => {
    let targetIndex = Array.from(document.querySelectorAll("li")).indexOf(tasitem);
let text = tasitem.innerText.trim();
            tasitem.remove();
    let list = JSON.parse(localStorage.getItem("allTasks"))
    let deleted = false;
    let fil = list.filter(word => {
           if (word === text && deleted === false) {
        deleted = true; 
        return false;  
    }

    return true; 

    })
    
localStorage.setItem("allTasks",JSON.stringify(fil)) 
let pre = JSON.parse(localStorage.getItem("allTasks"))
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



displayTask()


