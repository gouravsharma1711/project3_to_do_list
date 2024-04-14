

const inputBox = document.getElementById("add_text");
const button = document.querySelector("button");
const list = document.getElementById("list_container");


function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = add_text.value;
        list.appendChild(li);
        add_text.value = '';
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    saveData();
}
list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

button.addEventListener("click", addTask);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        list.innerHTML = savedData;
    }
}
window.addEventListener("load", showTask);