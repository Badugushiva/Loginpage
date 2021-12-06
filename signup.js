let fnameEl = document.getElementById("Fname");
let fnameErrMsgEl = document.getElementById("FnameErrMsg");

let lnameEl = document.getElementById("Lname");
let lnameErrMsgEl = document.getElementById("LnameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

let myFormEl = document.getElementById("myForm");

let formData = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

fnameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    fnameErrMsgEl.textContent = "*Enter Firstname";
  } else {
    fnameErrMsgEl.textContent = "";
  }

  formData.Fname = event.target.value;
});

lnameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    lnameErrMsgEl.textContent = "*Enter Lastname";
  } else {
    lnameErrMsgEl.textContent = "";
  }

  formData.Lname = event.target.value;
});

emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "*Enter Valid Email";
  } else {
    emailErrMsgEl.textContent = "";
  }

  formData.email = event.target.value;
});

passwordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    passwordErrMsgEl.textContent = "*Enter Password";
  } else {
    passwordErrMsgEl.textContent = "";
  }

  formData.password = event.target.value;
});

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
});
