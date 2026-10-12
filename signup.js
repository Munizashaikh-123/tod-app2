// Import the functions you need from the SDKs you need
import{auth} from "./firebaseConfig.js";
  import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries




var signupBtn = document.getElementById("signupbtn")
var loginBtn = document.getElementById("loginbtn")



signupBtn.addEventListener("click", function () {
    
var email = document.getElementById("email")
var pswd = document.getElementById("pswd")

createUserWithEmailAndPassword(auth, email.value, pswd.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

      alert("successful signup")
      window.location.replace("./todoapp.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  alert(errorMessage)
    // ..
  })
});

loginBtn.addEventListener("click", function () {

window.location.replace("./login.html")
 
});