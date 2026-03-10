const button = document.getElementById("themeToggleDark");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});