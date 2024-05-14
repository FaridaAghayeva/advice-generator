const div = document.getElementById("div");
const p = document.getElementById("p");
const id = document.getElementById("id");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error";
      }
    })
    .then((data) => {
      p.innerHTML = data.slip.advice;
      id.innerHTML = data.slip.id;
    });
});
