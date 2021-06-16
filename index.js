 
const lstLoggedOut = document.querySelectorAll('.logged-out');
const lstLoggedIn = document.querySelectorAll('.logged-in');
const datos = document.querySelector('.datos');




const configurarMenu = (user) => {
    if(user){
      console.log(user);
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
                <p>Correo: ${user.email }</p>
            `;
            console.log(html);
            datos.innerHTML = html;
        });
        lstLoggedIn.forEach(item => item.style.display = 'block');
        lstLoggedOut.forEach(item => item.style.display = 'none');
    } else {
        lstLoggedIn.forEach(item => item.style.display = 'none');
        lstLoggedOut.forEach(item => item.style.display = 'block');
    }
};