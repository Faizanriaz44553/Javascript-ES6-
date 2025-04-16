
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyCPdo51-1c-hcPSYVatKjbUC3S4P9OykTA",
   authDomain: "smit-batch-11-7786f.firebaseapp.com",
   projectId: "smit-batch-11-7786f",
   storageBucket: "smit-batch-11-7786f.appspot.com",
   messagingSenderId: "131697711613",
   appId: "1:131697711613:web:269f1c7167eb86d8fca194",
   measurementId: "G-6TMMF6S4YZ"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export {auth , createUserWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider , signInWithPopup}