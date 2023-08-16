// SELECTEURS 
// document.querySelector("h4")

// const baliseHtml = document.querySelector("h4");
// console.log(baliseHtml)

// Click events
const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");




btn1.addEventListener("click", () =>{
     questionContainer.classList.toggle;
     questionContainer.style.borderRadius = "20px";
});

btn2.addEventListener("click", () =>{
     questionContainer.classList.toggle;
     questionContainer.style.borderRadius = "30px";
});

btn3.addEventListener("click", () =>{
     questionContainer.classList.toggle;
     questionContainer.style.borderRadius = "40px";
});

btn4.addEventListener("click", () =>{
     questionContainer.classList.toggle;
     questionContainer.style.borderRadius = "50px";
});

btn5.addEventListener("click", () =>{
     questionContainer.classList.toggle;
     questionContainer.style.borderRadius = "60px";
});

