import {auth , createUserWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider , signInWithPopup} from './firebase.js'
const provider = new GoogleAuthProvider();
let password =document.getElementById('password')
let email =document.getElementById('email')
let signupBtn =document.getElementById('signupBtn')
let googleBtn =document.getElementById('googleBtn')


const signupFuntion = ()=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
       console.log(errorMessage);
      window.location.href = "./auth/login.html"
  });
}

signupBtn.addEventListener('click', signupFuntion);

onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      window.location.href = "./auth/dash.html"
    }
  });

const googleSignup = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
googleBtn.addEventListener("click", googleSignup)