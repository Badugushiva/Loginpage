let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

let myFormEl = document.getElementById("myForm");

let formData = {
  email: "",
  password: "",
};

emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "*Enter valid email";
  } else {
    emailErrMsgEl.textContent = "";
    formData.email = event.target.value;
  }
});

passwordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    passwordErrMsgEl.textContent = "*Enter valid password";
  } else {
    passwordErrMsgEl.textContent = "";
    formData.password = event.target.value;
  }
});

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
});
