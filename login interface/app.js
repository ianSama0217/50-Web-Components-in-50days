const eye = document.getElementById("imgBtn");
const password = document.getElementById("password");

eye.addEventListener("click", (e) => {
  let img = eye.getAttribute("src");
  switch (img) {
    case "./eye.svg":
      password.setAttribute("type", "text");
      eye.setAttribute("src", "./eye-slash.svg");
      break;
    case "./eye-slash.svg":
      password.setAttribute("type", "password");
      eye.setAttribute("src", "./eye.svg");
      break;
  }
});
