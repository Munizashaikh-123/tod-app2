// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword ,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC3-e3c7HuN5pjMoIM9NlRwpd8SWE68O7w",
    authDomain: "sign-up-project-81979.firebaseapp.com",
    projectId: "sign-up-project-81979",
    storageBucket: "sign-up-project-81979.firebasestorage.app",
    messagingSenderId: "913633197918",
    appId: "1:913633197918:web:91ff00d8746407926059cf",
    measurementId: "G-Y6GMC0H8C0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
console.log(app)

var signupBtn = document.getElementById("signupbtn")
var loginBtn = document.getElementById("loginbtn")

const auth = getAuth(app);

signupBtn.addEventListener("click", function () {
    
var email = document.getElementById("email")
var pswd = document.getElementById("pswd")

createUserWithEmailAndPassword(auth, email.value, pswd.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

      alert("successful signup", user)
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