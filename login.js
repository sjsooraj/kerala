let email = document.getElementById("email");
let error = document.getElementById("error");
let typenumber=document.getElementById("typenumber");
let error2 = document.getElementById("error2");
let pass = document.getElementById("pass");
let error1 = document.getElementById("error1");

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML='Valid';
        error.style.color='green';
        return true;

}
else{
    error.innerHTML='Invalid';
        error.style.color='red';
        return false;
}
}
function phonenumber()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if(typenumber.value.match(phoneno)){
    error2.innerHTML='Valid';
    error2.style.color='green';
    return true;

}
else{
error2.innerHTML='Invalid';
    error2.style.color='red';
    return false;
}
}



function password(){
    let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(pass.value.match(regexp1)){
        error1.innerHTML='Valid';
        error1.style.color='green';
        return true;

}
else{
    error1.innerHTML='Invalid';
        error1.style.color='red';
        return false;
}
}
let timeout;
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
function StrengthChecker(PasswordParameter) {
  if(strongPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = "green";
      strengthBadge.textContent = 'Strong';
  } else if(mediumPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = 'orange';
      strengthBadge.textContent = 'Medium';
  } else {
      strengthBadge.style.backgroundColor = 'red';
      strengthBadge.textContent = 'Weak';
  }
}
pass.addEventListener("input", () => {
  strengthBadge.style.display = 'block';
  clearTimeout(timeout);
  timeout = setTimeout(() => StrengthChecker(pass.value), 500);
  if(pass.value.length !== 0) {
      strengthBadge.style.display != 'block';
  } else {
      strengthBadge.style.display = 'none';
  }
})