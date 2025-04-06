const inputBill = document.querySelector("#amount");
const numPeople = document.querySelector("#people");
const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const custom1 = document.querySelector("#custom1");
const custom = document.querySelector("#custom");
let percentage;
let calculation = 0;
let people;

custom1.addEventListener("click",()  => {
    custom1.style.display = "none";
    custom.style.display = "block";
}) 
custom.addEventListener("input",() => {
    calculation = inputBill.value * custom.value;
    price1.textContent = `$${calculation}`;
    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;
})


document.querySelector("#five").addEventListener("click",() => {
    percentage = 0.05;

    calculation = inputBill.value * percentage;
        price1.textContent = `$${calculation}`;

   
    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;
    
});
document.querySelector("#ten").addEventListener("click",() => {
    price2.textContent = `$${numPeople.value}`;
    percentage = 0.10;
    calculation = inputBill.value * percentage;
    price1.textContent = `$${calculation}`;

    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;


});
document.querySelector("#fift").addEventListener("click",() => {
    price2.textContent = `$${numPeople.value}`;
    percentage = 0.15;
    calculation = inputBill.value * percentage;
    price1.textContent = `$${calculation}`;
    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;


});
document.querySelector("#twen").addEventListener("click",() => {
    price2.textContent = `$${numPeople.value}`;
    percentage = 0.20;
    calculation = inputBill.value * percentage;
    price1.textContent = `$${calculation}`;
    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;


});
document.querySelector("#fifty").addEventListener("click",() => {
    price2.textContent = `$${numPeople.value}`;
    percentage = 0.50;
    calculation = inputBill.value * percentage;
    price1.textContent = `$${calculation}`;

    people = calculation / numPeople.value;
    price2.textContent = `$${people.toFixed()}`;


});


function reset() {
    inputBill.value = "";
    numPeople.value = "";
    price1.textContent = "$0.00";
    price2.textContent = "$0.00";
    custom.display = "none";
    custom1.display  = "block";
}

