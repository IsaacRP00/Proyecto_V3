function validateForm(){
  const EMAIL = document.getElementById("inputEmail").value;
  const NAME = document.getElementById("inputName").value;
  const PHONE = document.getElementById("inputPhone").value;
  const PASSWORD = document.getElementById("inputPassword").value;
  const targetPageURL = '../index.html';
  if(EMAIL == ""){
    alert("El campo correo es requerido")
    return false;
  } else if(!EMAIL.includes("@")){
    return false;
  }
  if(NAME == ""){
    alert("El nombre es requerido")
    return false;
  } 
  if(PHONE == ""){
    alert("El teléfono es requerido")
    return false;
  } 
  if(PASSWORD == ""){
    alert("La password es requerida")
    return false;
  } 
  return true;
}

function initialize(){
  const FORM_VALIDATION = document.getElementById("form-validation");
  FORM_VALIDATION.addEventListener("submit", validateForm);
}

initialize();