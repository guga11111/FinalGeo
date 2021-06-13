
 var firebaseConfig = {
      apiKey: "AIzaSyCDTiJ5iRF7FvH8ndogLPy3mvXwEJFfcGA",
      authDomain: "delipollo-4fbc6.firebaseapp.com",
      projectId: "delipollo-4fbc6",
      storageBucket: "delipollo-4fbc6.appspot.com",
      messagingSenderId: "552785050364",
      appId: "1:552785050364:web:5976c21707fd35bcf4b579"
    };

    firebase.initializeApp(firebaseConfig);
    
    
    const formaingresar = document.getElementById('register');
    formaingresar.addEventListener('submit', (e) => {
      e.preventDefault();
      let correo = formaingresar['email'].value;
      let contrasena = formaingresar['password'].value;

      firebase.auth().signInWithEmailAndPassword(correo, contrasena).then(cred => {
        formaingresar.reset();
        window.location='Menu.html';
        alert('Si iniciaste sesión');
      }).catch(err => {
        alert('No pudiste iniciar sesión');
        console.log(err);
      });

    });