let elheader = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (scrollY >= 120) {
    elheader.classList.add("header-scrol");
  } else {
    elheader.classList.remove("header-scrol");
  }
});
