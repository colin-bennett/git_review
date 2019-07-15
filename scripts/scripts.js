"use strict";

const button = document.querySelector("button");

button.addEventListener("click", function() {
  const name = document.querySelector("input").value;
  const p = document.querySelector(".message");

  p.textContent = "What's goin' on, " + name;
});
