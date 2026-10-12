 import { auth, db } from "./firebaseConfig.js";       
import { getDatabase, ref, set, push , remove,update,onValue} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";      




   
var input =document.getElementById("todolist");
var addList = document.querySelector(".add");

var deleteList = document.querySelector(".delete");

var toDo = document.querySelector(".toDo");


addList.addEventListener("click",()=>{
    var taskBar = input.value.trim();
    if(taskBar===""){
        alert("Please write some task");
        return;
    }

    var taskRef = ref(db,'todoTask');
    var newTaskRef = push(taskRef)
    var taskId = newTaskRef.key;
    var taskData={
        id:taskId,
        task:taskBar
    }

   set(newTaskRef,taskData)
   .then(() => {
            console.log("Task saved to database successfully!");
        })
        .catch((error) => {
            console.log("Error saving task:", error.message);
        });
   
        toDo.innerHTML += `<li class="style-li" data-id="${taskId}"> 
        <span class="todoAdd" "> ${input.value} </span> <br> 
        <button   class="add-1"> Update </button>
         <button class="delete-1">  Delete </button> </li>`

              input.value = "";

              var readTask = ref(db,'todoTask')
               onValue(readTask, (snapshot) => {
               
              const data = snapshot.val();
               data += toDo.innerHTML;
               toDo.innerHTML= `<li class="style-li" data-id="${taskId}"> 
               <span class="todoAdd" "> ${input.value} </span> <br> 
               <button   class="add-1"> Update </button>
               <button class="delete-1">  Delete </button> </li>`
            
            
            })

              attachEvents()
})



    deleteList.addEventListener("click",()=>{

        var allTask = ref(db, "todoTask")
        remove(allTask)
        toDo.innerHTML = ""

    })
  

    function attachEvents(){
       var updateBtn = document.querySelectorAll(".add-1")
       updateBtn.forEach((btn)=>{
        btn.onclick = function(){
        var li = this.parentElement
        var taskId = li.getAttribute("data-id")
        var updateDb = ref(db,`todoTask/${taskId}`)
        var oldList = li.querySelector(".todoAdd")
        var newList = prompt("Update the list",oldList.innerText)
     
             oldList.innerText = newList

             update(updateDb , {task:newList})

        }
       })


       var delSingleTask = document.querySelectorAll(".delete-1")
       delSingleTask.forEach((btn)=>{
        btn.onclick = function(){
             var li = this.parentElement
            var taskId = li.getAttribute("data-id")
            var delRef = ref(db, `todoTask/${taskId}`)
            remove(delRef)
            li.remove()
   

        }
       })
    

    }




  



    function pressEnter(e){
        if(e.key ===  "Enter"){
         console.log(e.target.value)  
          var taskBar = input.value.trim();
    if(taskBar===""){
        alert("Please write some task");
        return;
    }
   toDo.innerHTML += `<li class="style-li"> 
        <span class="todoAdd"> ${input.value} </span> <br> 
        <button onclick="upDate(this)"  class="add-1"> Update </button>
         <button onclick="del(this)" class="delete-1">  Delete </button> </li>`
           
              input.value = ""; 
           
        }
      
    }


