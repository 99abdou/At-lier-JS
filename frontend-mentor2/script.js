const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

const btn = document.querySelector(".sumbit_btn");

let aujourdhui = new Date();
let moisActuel = 1 + aujourdhui.getMonth();
let jourActuel = aujourdhui.getDate();
let anneeActuel = aujourdhui.getFullYear();

function validate() {
    const inputs = document.querySelectorAll("input");
    let validation = true;
    
    inputs.forEach(element => {
        let parent = element.parentElement

        console.log(parent);
        if (element.value == '') {
            element.style.borderColor='red';
            parent.querySelector("small").innerText="remplir ses champs";
        }
    });

    
}
// validate();