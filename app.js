 import{auth} from "./firebaseConfig.js";
 import{db,ref,det,push,update,remove} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
 function addList(btn){
        var inp = document.getElementById("todolist")
        var getUl = btn.nextElementSibling.nextElementSibling
        getUl.innerHTML += `<li class="style-li"> <span class="todo"> ${inp.value} </span> <br> <button onclick="upDate(this)" class="add-1"
            > Update </button> <button onclick="del(this)" class="delete-1">  Delete </button> </li>`
           
                inp.value = ""
            
            
    }

    function delList(btn){
        var inp = document.querySelector("input")
        var del = btn.nextElementSibling
        del.innerHTML = "";



    }

    function upDate(btn){

       var oldList = btn.parentElement.firstElementChild
        var newList = prompt("Update the list",oldList.innerText)
     
             oldList.innerText = newList
       

    }

    function del(btn){
     var oldList = btn.parentElement
       
     
             oldList.remove()
    }

    function pressEnter(e){
        if(e.key ===  "Enter"){
            addList()
        }
      
    }