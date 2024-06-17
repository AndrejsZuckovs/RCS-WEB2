const rocket = document.getElementById("img-rocket");
const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");
const body = document.getElementById("body"); // for testing

console.log(rocket);
console.log(btnUp);
console.log(btnDown);

btnUp.addEventListener("click", () => {
  //   alert("Test-up");
  //   body.style.backgroundColor = "grey";
  rocket.style.transition = "margin-top 5s";
  rocket.style.marginTop = "-1200px";
});

btnDown.addEventListener("click", () => {
  //   alert("Test-down");
  rocket.style.transition = "margin-top 1s";
  rocket.style.marginTop = "0";
});
