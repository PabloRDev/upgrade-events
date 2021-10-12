// Iteración #1

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

var infoClick = function (event) {
  console.log(event);
};
document.getElementById("btnToClick").addEventListener("click", infoClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

var infoFocus = function (event) {
  console.log(event);
};
document.getElementById("btnToClick").addEventListener("focus", infoFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let value = document.querySelector(".value");

value.addEventListener("input", () => {
  console.log(value.value);
});
