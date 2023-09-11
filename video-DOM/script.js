// DOM Manipulation 

// const title = document.querySelector('main-heading');

// title.style.color = 'red';

// console.log(title);

// Creating Elements 

// GetElementById()

//GetElementByClassName()

// const listItem = document.getElementsByTagName('list-items');

// console.log(listItem);


// getElementByTagName()

// const listItem = document.getElementsByTagName('li');

// console.log(listItem);


//querySelector()

// const container = document.querySelectorAll('div');

// console.log(container);

// querySelectorAll()

// const container = document.querySelectorAll('div');

// console.log(container);

// **********************************************************************
// DOM Manipulation 

// Traverse the DOM 

// Parent Node Traversal 
// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


// Child Node Traversal 

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.firstChild.style.backgroundColor = 'blue';
// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibing Node Traversal 

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// // console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

/* ------------------------ EVENT LISTENERS ----------------------*/

// DOM Manipulation





// Event listeners


// element.addEventListner("click", function);

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn() {
//     alert('I love Javascript');
// }

// buttonTwo.addEventListener("click", alertBtn);

// // Mouseover

// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor() {
//     newBackgroundColor.style.backgroundColor = 'blue';
// };

// newBackgroundColor.addEventListener("mouseover",changeBgColor);


// Reveal Event 

// const revealBtn = document.querySelector('.reaveal-btn');

// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent() {
//     if (hiddenContent.classList.contains("reveal-btn")) {
        
//     } else {
//         hiddenContent.classList.add("reveal-btn");
//     }
// }

// revealBtn.addEventListener("click", revealContent);


// Event Probagation

// window.addEventListener("click", function () {
//     console.log(this.window);
// },true);

// document.addEventListener("click", function () {
//     console.log('Document');
// },true);

// document.querySelector(".div2").addEventListener("click", function () {
//     console.log('DIV 2');
// },true);

// document.querySelector(".div1").addEventListener("click", function () {
//     console.log('DIV 1');
// },true);

// document.querySelector("button").addEventListener("click", function (e) {
//     console.log(e.target.innertext = 'clicked!');
// },true);


// Event Delegation

// document.querySelector('#football').addEventListener('click', function (e) {
//     console.log('football is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#basketball').addEventListener('click', function (e) {
//     console.log('basketball is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function (e) {
//     console.log('boxing is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#tennis').addEventListener('click', function (e) {
//     console.log('tennis is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#golf').addEventListener('click', function (e) {
//     console.log('golf is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

document.querySelector('#sports').addEventListener('click', function (e) {
    
    console.log(e.target.getAttribute('id') + ' is Clicked');

    const target = e.target;

     if (target.matches('li')) {
         target.style.backgroundColor = 'lightgrey'
    }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerHTML = 'rugby';
newSport.getAttribute('id', 'rugby');

sports.appendChild(newSport)

