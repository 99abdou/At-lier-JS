const click1 = document.querySelector(".click-1");

// const btn1 = document.querySelector("#btn-1");

// console.log(btn1);



click1.addEventListener("mouseenter", () =>{
    click1.style.background = "blue";
    click1.classList.add("border-radius");
})

click1.addEventListener("mouseleave", () =>{
     click1.classList.remove("border-radius");
})

// click-2
const click2 = document.querySelector(".click-2");


click2.addEventListener("mouseenter", () =>{
    click2.classList.add("border-radius");
})

click2.addEventListener("mouseleave", () =>{
     click2.classList.remove("border-radius");
})

// click-3
const click3 = document.querySelector(".click-3");


click3.addEventListener("mouseenter", () =>{
    click3.classList.add("border-radius");
})

click3.addEventListener("mouseleave", () =>{
     click3.classList.remove("border-radius");
})

// 
const click4 = document.querySelector(".click-4");


click4.addEventListener("mouseenter", () =>{
    click4.classList.add("border-radius");
})

click4.addEventListener("mouseleave", () =>{
     click4.classList.remove("border-radius");
})

// 
const click5 = document.querySelector(".click-5");


click5.addEventListener("mouseenter", () =>{
    click5.classList.add("border-radius");
})

click5.addEventListener("mouseleave", () =>{
     click5.classList.remove("border-radius");
})