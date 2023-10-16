const billInput = document.querySelector('#bill')
const tipButton = document.querySelectorAll('.btn_btn-primary button')
const customTipButton = document.querySelector('.btn_btn-primary input')
const peopleLabel = document.querySelector('#peopleLabel')
const peopleInput = document.querySelector('#people')
const tipDom = document.querySelector('.tip h3')
const tipTotalDom = document.querySelector('tip-total h3')
const resetButton = document.querySelector('.result button')

let bill = 0
let tipAmountPourcentage = 0
let numberOfPeople = 0

const calculateTipTotal = () => {
    if (numberOfPeople !== 0) {
        tipDom.innerText = '$${(bill * (tipAmountPourcentage / 100) / numberOfPeople).toFixed(2)}'
        tipTotalDom.innerText = '$${(bill / numberOfPeople).toFixed(2)}'
    }
}

billInput.addEventListener('input', (event) => {
    bill =+event.target.value
    calculateTipTotal()
})

tipButton.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains('active')) {
            tipButton.forEach((button) => button.classList.remove('active'))
            tipAmountPourcentage = 0
        }
        else {
            tipButton.forEach((button) => button.classList.remove('active'))
            button.classList.add('active')
            tipAmountPourcentage = +button.value
        }
        calculateTipTotal()
    })
})

customTipButton.addEventListener('input', (event) => {
    tipAmountPourcentage = +event.target.value
    calculateTipTotal()
})

resetButton.addEventListener('click', () => {
    tipAmountPourcentage = 0
    bill = 0
    numberOfPeople = 0
    billInput.value = ''
    tipButton.forEach((button) => button.classList.remove('active'))
    customTipButton.value = ''
    tipDom.innerText = '$0.00'

})