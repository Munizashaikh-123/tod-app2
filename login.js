import{auth} from "./firebaseConfig.js";
  import { getAuth,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use



loginBtn.addEventListener("click", function () {
var email = document.getElementById("email")
var pswd = document.getElementById("pswd")
    signInWithEmailAndPassword(auth, email.value, pswd.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("successful Login", user)
            // ...
             window.location.replace("./todoapp.html");
        })
        .catch((error) => {
  console.log("Error code:", error.code);
  console.log("Error message:", error.message);
  alert("Signup Failed: " + error.message); 

 
});
})