const datosdelacuenta = document.querySelector('.datosdelacuenta');


const configurarMenu = (user) => {
    if (user) {
        cargarMapa();        
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
            <p style="color: white;">Nombre: ${doc.data().nombre}</p>
            <p style="color: white;">Correo: ${user.email}</p>
            <p style="color: white;">Telefono: ${doc.data().numero}</p>`; 

            datosdelacuenta.innerHTML = html;
        })        
    } else {

    }
};

const listadeplatillos = document.getElementById('listadeplatillos');

const obtienePlatillos = (data) => {
    if (data.length) {
        let html = '';
        console.log('HOLA')
        data.forEach(doc => {            
        });
    } else {
        listadeplatillos.innerHTML= '<p style="color: white" class="text-center">Necesita logearse para ver los lugares</p>';
    }
};