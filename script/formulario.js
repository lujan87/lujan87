function validar()
{ 
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;
  
  var expr = /\w+@\w+\.+[a-z]/;

  if(nombre === ''|| correo === '' || telefono === '')
  {
    alert('Todos los campos son obligatorio');
    return false;
  }else if(nombre.length>30){
    alert('El nombre es muy largo');
    return false;
  }else if(correo.length>100){
    alert('El correo es muy largo');
    return false;
  }else if(!expr.test(correo)){
    alert('El correo no es válido');
    return false;
  }else if(telefono.length>10){
    alert('El teléfono es muy largo');
    return false;
  }else if(isNaN(telefono)){
    alert('El teléfono introducido no es numérico');
    return false;
  }
}