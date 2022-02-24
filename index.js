const input =document.querySelector(".todo-input")
const addBtn =document.querySelector(".add-btn")
const list =document.querySelector(".list")
const clear =document.querySelector(".clear")


addBtn.addEventListener("click",()=>{
    if (input.value.trim()){
        let tasks =JSON.parse(localStorage.getItem("tasks",)) || []
        tasks =[{title: input.value,done:false},...tasks]
        localStorage.setItem("tasks",JSON.stringify(tasks))
        input.value =""
        view()
    }
})


list.addEventListener("click",(event)=>{
    console.log(event.target.classList)
    if (event.target.classList[0] === "del-btn"){
        event.target.parentNode.remove()
    }
})

//////////////////////////////////////////25.12.2021.сб\\\\\\\\\\\\\\\\\\
// localsStore
// sessionStorage

localStorage.setItem("name","aza")
console.log(localStorage.getItem("name"))

function view(){
    let tasks  = JSON.parse(localStorage.getItem("tasks")) || []
    let allTasks = ""
    tasks.forEach(item => {
        allTasks +=`<li
    class="list-group-item d-flex justify-content-between align-item-center">
    ${item.title}
    <button class="del-btn btn btn-danger">&times;</button>
    </li>`
    })
    list.innerHTML = allTasks
    deleteTasks()
}

view()

function deleteTasks() {
    const delBtns = document.querySelectorAll(".del-btn")
    delBtns.forEach( (btn, idx )=> {
        btn.addEventListener("click", () => {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || []
            tasks = tasks.filter((item,index) => {
                return idx !== index
            })
            localStorage.setItem("tasks", JSON.stringify(tasks))
            view()
        })
    })
}

clear.addEventListener("click",() =>{
    localStorage.removeItem("tasks")
    view()
})
/////////////////////////////////
