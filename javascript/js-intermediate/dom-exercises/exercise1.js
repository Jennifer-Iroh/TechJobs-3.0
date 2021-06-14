//1
document.getElementById("container");

// 2 
document.querySelector("#container")

// 3 
document.getElementsByClassName("second")

// 4 
document.querySelector("ol .third");

// 5 
const divHello = document.querySelector("#container");
divHello.innerText = "Hello";

// 6 
const footer = document.querySelector(".footer");
footer.classList.add("main");


// 7 
footer.classList.remove("main");

// 8 
const liNew = document.createElement("li");

// 9
liNew.innerText = "four"

// 10 
const appendedList = document.querySelector("ul");
appendedList.appendChild(newLi);

// 11 
const liChildofUl = document.querySelectorAll("ol li");
for (let i = 0; i < liChildofUl.length; i++) {
    liChildofUl[i].style.backgroundColor = "green";
}

// 12 
footer.remove();