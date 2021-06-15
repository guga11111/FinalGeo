 var firebaseConfig = {
          apiKey: "AIzaSyCDTiJ5iRF7FvH8ndogLPy3mvXwEJFfcGA",
      authDomain: "delipollo-4fbc6.firebaseapp.com",
      projectId: "delipollo-4fbc6",
      storageBucket: "delipollo-4fbc6.appspot.com",
      messagingSenderId: "552785050364",
      appId: "1:552785050364:web:5976c21707fd35bcf4b579"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
      window.onload = function () {
    auth.onAuthStateChanged( user =>{
        if (user){
          window.location="menuu.html";
            console.log(user);
        } else {
        }
    })
};