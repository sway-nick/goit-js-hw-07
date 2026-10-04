const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value.trim();
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formDataObject);
  loginForm.reset();
});
