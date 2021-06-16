auth.onAuthStateChanged( user=>{
  if(user){
    configurarMenu(user);
  }
  else {
    configurarMenu();
  }
})
 

 
 

  
  