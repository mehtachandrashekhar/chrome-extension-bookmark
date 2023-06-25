let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead)
}
delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead=[]
    render(myLead)
})

inputBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)
    inputEl.value =''
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
    
})

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
        listItems += `<li>
         <a  target ='_blank' href = '${leads[i]}'>  
         ${leads[i]} 
         </a> 
         </li>`
    }
    ulEl.innerHTML = listItems    
}
