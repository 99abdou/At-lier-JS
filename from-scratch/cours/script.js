// SELECTEURS 
// document.querySelector("h4")
// const baliseHtml = document.querySelector("h4");
// console.log(baliseHtml) 
// Click events
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1")
const btn2 = document.getElementById("btn-2")
const response = document.querySelector("p")

questionContainer.addEventListener("click", () =>{
     questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () =>{
     response.classList.add("show-response");
     response.style.background = "green";
});

btn2.addEventListener("click", () =>{
     response.classList.add("show-response");
     response.style.background = "red";
});

// ------------------------------------------------------------------------------------------

// Mouse Event
// mouvement de la souris
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) =>{
     mousemove.style.left = e.pageX + "px"
     mousemove.style.top = e.pageY + "px"
})

window.addEventListener("mousedown", () => {
     mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
     mousemove.style.transform = "scale(1) translate(-50%, -50%)";
})

questionContainer.addEventListener('mouseenter', () =>{
     questionContainer.style.backgroundColor ="rgba(0, 0,0,0.6";
})

questionContainer.addEventListener('mouseout', () => {
     questionContainer.style.background = "pink"
})

response.addEventListener('mouseover', () => {
     response.style.transform="rotate(-2deg)";
})

// -----------------------------------------------------------------------------------------
// keyPress Events

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
     key.textContent = e.key;

     if (e.key === "j") {
          keypressContainer.style.background = "pink";
     } else if (e.key === "g") {
          keypressContainer.style.background= "yellow";
     } else {
          keypressContainer.style.background="#f48fb1";
     }
     if (e.key === "z") ring(e.key);
});

// ---------------------------------------------------------------------
// Scroll Events

const nav = document.querySelector("nav")
window.addEventListener("scroll", (e) =>{
     console.log(window.scrollY);

     if (window.scrollY > 120) {
          nav.style.top = 0
     } else {
          nav.style.top="-50px";
     }
})

// -----------------------------------------------------------------------------------------
 const inputName = document.querySelector('input[type="text"]'); 
 const select = document.querySelector("select");
 const form = document.querySelector("form");
let pseudo = "";
let language = "";

 inputName.addEventListener("input", (e) => {
     pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
     language = e.target.value;
});

form.addEventListener("submit", (e) => {
     e.preventDefault();

    

     if (cgv.checked) {
          document.querySelector('form > div').innerHTML = `
          <h3>Pseudo : ${pseudo}<h3>  
          <h4>Language préféré : ${language}<h4>        
          `;
     } else {
          alert ("Veuillez accepter les CGV");
     }
});

// ------------------------------------------------------------------------

// Load event 
window.addEventListener("load", () =>{
     console.log("document charge");
})

// ------------------------------------------------------------------------------
// forEach
// const boxes = documennt.getElementByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
     box.addEventListener("click", (e) => {
          e.target.style.transform = "scale(0.7)"
     });
});

//addEventListener Vs onclick
document.body.onclick = function () {
     console.log("Scroll !!");
};

// Bubbling => fin (de base l'eventlistner est paramétré en mode Bubbling)
document.body.addEventListener("click", () => {
          console.log("click 1 !");
});

// Usecapture
document.body.addEventListener(
     "click", 
     () => {
          console.log("click 2 !");
     },
     true
);

// -----------------------------------------------------------------------------
// stop propagation
questionContainer.addEventListener("click", () => {
     alert("test !!")
     e.stopPropagation();
});

// removeEventListener

// --------------------------------------------------------------------------
// BOM

console.log(window.innerHeight);
console.log(window.scrollY);
Window.open("http://google.com", "cours js", "height=600, width=800");
window.close();

// évenment adosée à window

alert("hello");

// Confirm
btn2.addEventListener("click", () => {
     confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
     let answer = prompt("Entrez votre nom !");

     questionContainer.innerHTML = "<h3>Bravo" + answer + "</h3>"
});

// Timer, compte à rebours
setInterval(() => {
     questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
     document.body.innerHTML += `
          <div class='box'>
          <h2>Nouvelle Boite ! </h2
          </div> 
     `;
}, 4000);

document.body.addEventListener("click", (e) => {
     e.target.remove();
     clearInterval(interval);
});

// location 
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// window.onload = () => {
//      location.href = "http://twitter.fr";
// };

// navigator
// console.log(navigator.userAgent);

