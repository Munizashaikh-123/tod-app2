// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
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

export  const auth = getAuth(app);
export const db = getDatabase(app)

