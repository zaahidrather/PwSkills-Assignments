let input = document.querySelector("input");
let addBtn = document.querySelector(".add-button");
let deleteBtn = document.querySelector(".delete-button");
let main = document.querySelector("main");

addBtn.addEventListener("click",addItems);

function addItems(e){
    if(input.value =="")
    alert("Please enter something first.")
    else{
        e.preventDefault();
        const task = document.createElement("div");
        task.classList.add("task")
        const span = document.createElement("span");
        span.classList.add("text-content")
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa","fa-trash");
        let node = document.createTextNode(input.value);
        main.appendChild(task);
        task.appendChild(span);
        task.appendChild(deleteBtn);
        span.appendChild(node);
        deleteBtn.appendChild(deleteIcon);
        input.value = "";
        deleteBtn.addEventListener("click",()=>{
            main.removeChild(task);
        });
    }
}

