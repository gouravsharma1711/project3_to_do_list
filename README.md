# project3_to_do_list

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>TO-DO-LIST</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="box">
            <div class="top">
                <h1>To Do List</h1>
                <div class="img_container">
                    <img src="icon.png" alt="icon">
                </div>
            </div>
            <div class="mid">
                <input id="add_text" type="text" placeholder="Add Your Task">
                <button>Add</button>
            </div>
            <div class="bottom">
                <ul id="list_container"></ul>
            </div>
        </div>
        <div class="background">
            <img class="bgimg" src="360_F_589740040_BzYqjC2Lt9SgDPHx2i1UkW6dBqUjvOMC.jpg" alt="">
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.container{
    z-index: -10;
    height: 100vh;
    width: 100vw;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items:center;
}
.background{
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100vw;
    
    overflow: hidden;
    height: 400px;
}
.bgimg{
    height: 100%;
    width: 100%;
}
.box{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    max-width: 565px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.top{
    display: flex;
    gap: 1rem;
}
.top h1{
    font-size: xx-large;
    color: blue;

}
.img_container{
    height: 40px;
    width: 40px;
    overflow: hidden;
    object-position: center;
}
.img_container img{
    height: 100%;
    width: 100%;
}
.mid{
    background-color:  #edeef0;;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    
}
input{
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border: none;
    padding: 12px 30px;
    cursor: text;
    outline: none;
}
@media  screen and (max-width:299px) {
    .mid{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        gap: 1rem;
    }
    input{
        border: 1px solid black;
        border-radius: 15px;

    }
}

button{
    width: 10rem;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    background-color:#5867ea;
    border-radius: 15px;
    color: white;
    font-size: large;
    font-weight: 500;
    transition: all .25s ease;
}
.bottom{
    border-top: 1px solid rgb(187, 183, 183);
    padding-top: 15px;
}
button:hover{
    filter: brightness(.8);
}
ul{
    list-style-type: none;
}
ul li{
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    margin-top: 5px;
    /* user-select: none; */
    cursor: pointer;
    position: relative;
}
ul li::before{
    position: absolute;
    content: '';
    background-image:url(unchecked.png) ;
    background-size: cover;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    left: 0;
}
ul .checked{
    color: red;
    text-decoration: line-through;
}
ul .checked::before{
    background-image: url(checked.png);
    background-size: cover;
}
span {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 18px;
    transition: all .2s ease;
}
span:hover{
    background-color: #c9c9c9;
    color: #fff;
}
```

## JavaScript

```javascript


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
```