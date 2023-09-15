function checkInputN() {
  var inputName = document.getElementById("username").value;
  var nameValid = document.getElementById("name-valid");
  var nameError = document.getElementById("name-error");
  var tickIcon = '<span style="color: green;">&#10004;</span>';
  var regexNum = /^[^0-9]/;
  var regexChar = /^[a-zA-Z0-9_]+$/;

  if (inputName == "") {
    nameError.innerHTML = '<span style="color: red;">Vui lòng nhập username</span>';
    nameValid.innerHTML = "";
    return false;
  } else if (!regexNum.test(inputName)) {
    nameError.innerHTML = '<span style="color: red;">Tên đăng nhập không bắt đầu bằng chữ số</span>';
    nameValid.innerHTML = "";
    return false;
  } else if (!regexChar.test(inputName)) {
    nameError.innerHTML = '<span style="color: red;">Tên đăng nhập không chứa kí tự đặc biệt</span>';
    nameValid.innerHTML = "";
    return false;
  } else if (inputName.length < 6) {
    nameError.innerHTML = '<span style="color: red;">Tên đăng nhập có ít nhất 6 kí tự</span>';
    nameValid.innerHTML = "";
    return false;
  } else {
    nameValid.innerHTML = tickIcon;
    nameError.innerHTML = "";
    return true;
  }
}

function checkInputP() {
  var inputPassword = document.getElementById("password").value;
  var passwordValid = document.getElementById("psw-valid");
  var passwordError = document.getElementById("psw-error");
  var tickIcon = '<span style="color: green;">&#10004;</span>';

  if (inputPassword == "") {
    passwordError.innerHTML = '<span style="color: red;">Vui lòng nhập mật khẩu</span>';
    passwordValid.innerHTML = "";
    document.querySelector(".form__password--vision").style.transform = "translateX(0)";
    return false;
  } else if (inputPassword.length < 6) {
    passwordError.innerHTML = '<span style="color: red;">Mật khẩu có ít nhất 6 kí tự</span>';
    passwordValid.innerHTML = "";
    document.querySelector(".form__password--vision").style.transform = "translateX(0)";
    return false;
  } else {
    passwordValid.innerHTML = tickIcon;
    passwordError.innerHTML = "";
    document.querySelector(".form__password--vision").style.transform = "translateX(-25px)";
    return true;
  }
}

function hideButton() {
  var inputPassword = document.getElementById("password").value;
  var passwordButton = document.querySelector(".form__password--vision");

  if (inputPassword != "") {
    passwordButton.classList.add("visible");
  } else {
    passwordButton.classList.remove("visible");
  }
}

function checkPassword() {
  var inputPassword = document.getElementById("password").value;
  var inputConfirm = document.getElementById("password2").value;
  var passwordMatch = document.getElementById("psw-match");
  var passwordMismatch = document.getElementById("psw-mismatch");
  var tickIcon = '<span style="color: green;">&#10004;</span>';

  if (inputConfirm == "") {
    passwordMismatch.innerHTML = '<span style="color: red;">Vui lòng nhập lại mật khẩu</span>';
    passwordMatch.innerHTML = "";
    return false;
  } else if (inputPassword != inputConfirm) {
    passwordMismatch.innerHTML = '<span style="color: red;">Mật khẩu không khớp</span>';
    passwordMatch.innerHTML = "";
    return false;
  } else {
    passwordMatch.innerHTML = tickIcon;
    passwordMismatch.innerHTML = "";
    return true;
  }
}

function showHideP() {
  var inputPassword = document.getElementById("password");
  var inputConfirm = document.getElementById("password2");
  var passwordButton = document.querySelector(".form__password--vision");

  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    inputConfirm.type = "text";
    passwordButton.classList.remove("fa-eye-slash");
    passwordButton.classList.add("fa-eye");
  } else {
    inputPassword.type = "password";
    inputConfirm.type = "password";
    passwordButton.classList.remove("fa-eye");
    passwordButton.classList.add("fa-eye-slash");
  }
}

function checkSubmit() {
  if (checkInputN() && checkInputP() && checkPassword()) {
    alert("Đăng ký thành công! Chào mừng bạn đến với TLT Shop.");
    window.location.href = "trangchu.html";
  } else {
    alert("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin đăng ký.");
  }
}

document.querySelector(".form").addEventListener("submit", checkSubmit);
