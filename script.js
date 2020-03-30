var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector(".css");
var mainWrapper = document.querySelector(".background-wrapper");

function setBackgroundGradient(event) {
  mainWrapper.style.backgroundImage =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = mainWrapper.style.backgroundImage + ";";
}

color1.addEventListener("input", setBackgroundGradient);
color2.addEventListener("input", setBackgroundGradient);
