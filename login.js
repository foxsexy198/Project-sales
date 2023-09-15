function checkInputN() {
  var inputName = document.getElementById("usernamedn").value;
  var nameError = document.getElementById("name-error");
  var regexNum = /^[^0-9]/;
  var regexChar = /^[a-zA-Z0-9_]+$/;

  if (inputName == "") {
    nameError.innerHTML = '<span style="color: red;">Vui lòng nhập username</span>';
    return false;
  } else if (!regexNum.test(inputName) || !regexChar.test(inputName) || inputName.length < 6) {
    nameError.innerHTML = "";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}

function checkInputP() {
  var inputPassword = document.getElementById("passworddn").value;
  var passwordError = document.getElementById("psw-error");

  if (inputPassword == "") {
    passwordError.innerHTML = '<span style="color: red;">Vui lòng nhập mật khẩu</span>';
    return false;
  } else if (inputPassword.length < 6) {
    passwordError.innerHTML = "";
    return false;
  } else {
    passwordError.innerHTML = "";
    return true;
  }
}

function hideButton() {
  var inputPassword = document.getElementById("passworddn").value;
  var passwordButton = document.querySelector(".form__password--vision");

  if (inputPassword != "") {
    passwordButton.classList.add("visible");
  } else {
    passwordButton.classList.remove("visible");
  }
}

function showHideP() {
  var inputPassword = document.getElementById("passworddn");
  var passwordButton = document.querySelector(".form__password--vision");

  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    passwordButton.classList.remove("fa-eye-slash");
    passwordButton.classList.add("fa-eye");
  } else {
    inputPassword.type = "password";
    passwordButton.classList.remove("fa-eye");
    passwordButton.classList.add("fa-eye-slash");
  }
}

function checkSubmit() {
  if (!checkInputN()) {
    alert("Tên đăng nhập không hợp lệ hoặc không tồn tại!");
  } else if (!checkInputP()) {
    alert("Mật khẩu không đúng!");
  } else {
    alert("Đăng nhập thành công! Chào mừng bạn trở lại với TLT Shop.");
    window.location.href = "index.html";
  }
}

document.querySelector(".form").addEventListener("submit", checkSubmit);

//open-close signup/login

const login = document.querySelector(".js-header-login");
const signup = document.querySelector(".js-header-signup");
const formLogin = document.querySelector(".js-form-container");
const formSignup = document.querySelector(".js-form-container-dk");
const btnCloseLogin = document.querySelector(".js-btn-close-login");
const btnCloseSignup = document.querySelector(".js-btn-close-signup");
const dangKi = document.querySelector(".js-form__link--dk");
const dangNhap = document.querySelector(".js-form__link--dn");

function showLogin() {
  formLogin.classList.add("open");
}
function closeLogin() {
  formLogin.classList.remove("open");
}
function showSignup() {
  formSignup.classList.add("open");
}
function closeSignup() {
  formSignup.classList.remove("open");
}
function dangki() {
  closeLogin();
  showSignup();
}
function dangnhap() {
  closeSignup();
  showLogin();
}

login.addEventListener("click", showLogin);
btnCloseLogin.addEventListener("click", closeLogin);
signup.addEventListener("click", showSignup);
btnCloseSignup.addEventListener("click", closeSignup);
dangKi.addEventListener("click", dangki);
dangNhap.addEventListener("click", dangnhap);
