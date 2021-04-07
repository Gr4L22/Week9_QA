function nameVerification(fullName) {
  return /^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(fullName);
}
function mailVerification(mail) {
  return /^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(mail);
}
function passVerification(pass) {
  return /^(?=.{8,})([a-zA-Z0-9])+$/.test(pass);
}

function minLength(string, n) {
  return string.length >= n;
}

function dataValidator(data) {
  return data.name && data.email && data.pass && data.rePass;
}
