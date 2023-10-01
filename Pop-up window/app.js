const popwindow = document.getElementById("popBox");
const body = document.body;
const loginBtn = document.getElementById("loginBtn");
const cancelBtn = document.getElementById("Xbtn");

loginBtn.addEventListener("click", () => {
  popwindow.style.display = "block";
  loginBtn.style.display = "none";
  body.style.backgroundColor = "rgba(0,0,0,0.3)";
});

cancelBtn.addEventListener("click", () => {
  popwindow.style.display = "none";
  loginBtn.style.display = "block";
  body.style.backgroundColor = "white";
});
