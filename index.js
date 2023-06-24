let myLead = ["www.google.com","www.yahoo.com","www.wame.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)
    for(let i =0;i<myLead.length;i++){
        ulEl.textContent = myLead[i]
    }
})