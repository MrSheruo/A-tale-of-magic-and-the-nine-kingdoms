const nextbtn = document.querySelector(".next");
const backbtn = document.querySelector(".back");
const body = Number(
  document.querySelector("body").getAttribute("data-chapter")
);
console.log(body);
nextbtn.addEventListener("click", () => {
  if (body) {
    nextbtn.setAttribute("href", `${body + 1}.html`);
  }
});

backbtn.addEventListener("click", () => {
  if (body) {
    backbtn.setAttribute("href", `${body - 1}.html`);
  }
});
