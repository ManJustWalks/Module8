//Вход
document.getElementById("auth-form").addEventListener("submit", function (e) {

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (password.length < 6) {
    alert("Пароль должен содержать минимум 6 символов.");
    return;
  }

  alert(`Добро пожаловать, ${username}!`);
});

// сохранение
if (localStorage.getItem("username")) {
  document.querySelector(".auth__frame").innerHTML =
    `<h2 style="color:white;">Вы вошли как ${localStorage.getItem("username")}</h2>`;
}

document.getElementById("auth-form").addEventListener("submit", function (e) {
  const username = document.getElementById("username").value.trim();
  localStorage.setItem("username", username);
  location.reload(); 
});

// Показ пароля

document.getElementById("show-password").addEventListener("change", function () {
  const passwordInput = document.getElementById("password");
  passwordInput.type = this.checked ? "" : "password";
});