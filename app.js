// ! selector functions
const $ = (value) => document.querySelector(value),
  $All = (value) => document.querySelectorAll(value);

// ? selectors
let form = $("#form"),
  userName = $("#username"),
  password = $("#pass"),
  email = $("#email"),
  errorMsg = $All(".error"),
  successIcons = $All(".success-ico"),
  failureIcons = $All(".failure-ico");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //? username
  input(userName, 0, "Username");

  //? email
  input(email, 1, "Email");

  //? password
  input(password, 2, "Password");

  //* clear input-field after submit
});

//* if value is empty
const input = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = `${message} can't be blank`;
    failureIcons[serial].style.opacity = "1";
    successIcons[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    failureIcons[serial].style.opacity = "0";
    successIcons[serial].style.opacity = "1";
  }
};
