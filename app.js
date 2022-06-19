// selecting elements
const regBtn = document.getElementById("reg-btn");
const loginForm = document.getElementById("login");
const regForm = document.getElementById("register");
//event functions
const login = (e) => {
  e.preventDefault();
  let email = document.getElementById("inputEmail3").value;
  let password = document.getElementById("inputPassword3").value;

  if (email !== "" && password !== "") {
    location.href = "manager-dashboard.html";
  } else {
    alert("incorrect email or password!");
  }
};

const register = (e) => {
  e.preventDefault();
  alert("clicked----");
};

const toggleReg = () => {
  document.querySelector("#login-wrapper").classList.add("d-none");
  document.querySelector("#reg-wrapper").classList.remove("d-none");
  // document.querySelector("#login-wrapper").classList.add("d-none");
  // document.querySelector("#login-wrapper").style.tranform = "translate(0%)";
  // document.querySelector("#login-wrapper").style.left = "200%";
};

//event listeners
loginForm.addEventListener("submit", login);
regForm.addEventListener("submit", register);
regBtn.addEventListener("click", toggleReg);
