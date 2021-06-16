// Your web app's Firebase configuration
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

const db = firebase.firestore();
 
const lstLoggedOut = document.querySelectorAll('.logged-out');
const lstLoggedIn = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
  console.log(user);
    if(user){
      console.log('entro');
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
                <p>Nombre: ${doc.data().nombre}</p>
                <p>Correo: ${user.email }</p>
                <p>Dirección: ${doc.data().direccion}</p>
            `;
            console.log(html);
            datosdelacuenta.innerHTML = html;
        });
        lstLoggedIn.forEach(item => item.style.display = 'block');
        lstLoggedOut.forEach(item => item.style.display = 'none');
    } else {
        lstLoggedIn.forEach(item => item.style.display = 'none');
        lstLoggedOut.forEach(item => item.style.display = 'block');
    }
};