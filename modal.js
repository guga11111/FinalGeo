auth.onAuthStateChanged(user =>{
    console.log(user);
    if(user){    
        db.collection('platillos').onSnapshot(snapshot =>{
            obtienePlatillos(snapshot.docs);            
        });        
        configurarMenu(user);
    } else {
        obtienePlatillos([]);
        configurarMenu();
    }
});