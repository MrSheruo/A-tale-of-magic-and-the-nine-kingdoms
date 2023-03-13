"use strict";
// Start navbar************-------------*****************-----------------
const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navLinks.classList.toggle("nav-toggle");
});
// End navbar************-------------*****************-----------------
