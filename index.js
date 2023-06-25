let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadsFromLocalStorage)


saveBtn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    // console.log(tabs[0].url)
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
    })
});

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
