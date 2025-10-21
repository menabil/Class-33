const heading = document.querySelector("h1");
console.log(heading.innerHTML);

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function () {
  heading.innerText = "Bye World!";
});

let dur = document.querySelector(".dur");
let lig = document.querySelector(".lig");
let black = document.querySelector("h1");
let white = document.querySelector("h1");
let hblack = document.querySelector("h3");
let hwhite = document.querySelector("h3");

dur.addEventListener("click", () => {
  document.body.style.background = "black";
  white.style.color = "white";
  hwhite.style.color = "white";
});

lig.addEventListener("click", () => {
  document.body.style.background = "white";
  black.style.color = "black";
  hblack.style.color = "black";
});

const seeOutput = document.querySelector("input");

seeOutput.addEventListener("keyup", () => {
  console.log(seeOutput.value);
});
