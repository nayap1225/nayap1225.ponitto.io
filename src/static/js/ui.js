window.addEventListener("load", function () {
  btnToTopController();
});
window.addEventListener("scroll", function () {
  btnToTopController();
});

// menu control
function clickMenuControl(event) {
  const target = event.currentTarget;
  const nav = document.querySelector("#nav");
  target.classList.toggle("is-open");
  if (!target) return;
  if (target.classList.contains("is-open")) {
    nav.classList.add("is-open");
  } else {
    nav.classList.remove("is-open");
  }
}

// btn to top
function clickGoToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
// btn class
function btnToTopController() {
  const btnToTop = document.querySelector(".btn__top");
  if (!btnToTop) return;
  if (window.scrollY > 50) {
    btnToTop.classList.add("is-show");
  } else {
    btnToTop.classList.remove("is-show");
  }
}
