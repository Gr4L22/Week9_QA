////////////////////////////////////////////////////////////////////////////////////////
var fullName = document.getElementById("full_name");
var errorName = document.getElementById("error_name");
////////////////////////////////////////////////////////////////////////////////////////
var email = document.getElementById("mail");
var errorEmail = document.getElementById("error_mail");
////////////////////////////////////////////////////////////////////////////////////////
var password = document.getElementById("password");
var errorPassword = document.getElementById("error_pass");
////////////////////////////////////////////////////////////////////////////////////////
var rePassword = document.getElementById("confirm_pass");
var errorRePassword = document.getElementById("error_rePass");

var button = document.getElementById("button");
var data = {};
var dataError = ["", "", "", "", "Empty form"];

////////////////////////////////////////////////////////////////////////////////////////

function logicName(e) {
  if (nameVerification(e.target.value)) {
    data.name = e.target.value;
  } else {
    data.name = undefined;
    errorName.style.display = "block";
    dataError[0] = "Name Error";
    dataError[10] = " ";
  }
}
function displayErrorName() {
  errorName.style.display = "none";
}
////////////////////////////////////////////////////////////////////////////////////////
function logicMail(e) {
  if (mailVerification(e.target.value)) {
    data.email = e.target.value;
  } else {
    data.email = undefined;
    errorEmail.style.display = "block";
    dataError[1] = "Mail Error";
    dataError[10] = " ";
  }
}
function displayErrorMail() {
  errorEmail.style.display = "none";
}
////////////////////////////////////////////////////////////////////////////////////////
function logicPass(e) {
  if (passVerification(e.target.value)) {
    data.pass = e.target.value;
  } else {
    data.pass = undefined;
    errorPassword.style.display = "block";
    dataError[2] = "Pass Error";
    dataError[10] = " ";
  }
}
function displayErrorPass() {
  errorPassword.style.display = "none";
}
////////////////////////////////////////////////////////////////////////////////////////
function logicRePass(e) {
  if (data.pass == e.target.value) {
    data.rePass = e.target.value;
  } else {
    data.rePass = undefined;
    errorRePassword.style.display = "block";
    dataError[3] = "Re Pass Error";
    dataError[10] = " ";
  }
}
function displayReErrorPass() {
  errorRePassword.style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////////////
function printAlert(e) {
  e.preventDefault;
  if (dataValidator(data)) {
    alert(data.email + " " + data.name);
  } else {
    alert(
      "There is an error in the form: " +
        dataError[4] +
        " " +
        dataError[0] +
        " " +
        dataError[1] +
        " " +
        dataError[2] +
        " " +
        dataError[3]
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////
fullName.addEventListener("blur", logicName);
fullName.addEventListener("focus", displayErrorName);
////////////////////////////////////////////////////////////////////////////////////////
email.addEventListener("blur", logicMail);
email.addEventListener("focus", displayErrorMail);
////////////////////////////////////////////////////////////////////////////////////////
password.addEventListener("blur", logicPass);
password.addEventListener("focus", displayErrorPass);
////////////////////////////////////////////////////////////////////////////////////////
rePassword.addEventListener("blur", logicRePass);
rePassword.addEventListener("focus", displayReErrorPass);

button.addEventListener("click", printAlert);
