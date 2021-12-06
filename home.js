let fullnameEl = document.getElementById("Fullname");
let fullnameElError = document.getElementById("FullnameError");

let eventsEl = document.getElementById("events");
let eventsElError = document.getElementById("eventsError");

let descriptionEl = document.getElementById("description");
let descriptionElError = document.getElementById("descriptionError");

let starttimeEl = document.getElementById("starttime");

let endtimeEl = document.getElementById("endtime");

let day = document.getElementById("day");

let myFormEl = document.getElementById("myForm");

let formData = {
  fullname: "",
  events: "",
  description: "",
  starttime: "",
  endtime: "",
};

fullnameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    fullnameElError.textContent = "*Enter Fullname";
  } else {
    fullnameElError.textContent = "";
  }

  formData.Fname = event.target.value;
});

eventsEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    eventsElError.textContent = "*Enter Events";
  } else {
    eventsElError.textContent = "";
  }

  formData.Lname = event.target.value;
});

descriptionEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    descriptionElError.textContent = "*Enter Description";
  } else {
    descriptionElError.textContent = "";
  }

  formData.email = event.target.value;
});

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
});
