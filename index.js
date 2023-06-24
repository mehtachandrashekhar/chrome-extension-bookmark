let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)

    console.log(myLead)
    console.log("Hello moto !")
})