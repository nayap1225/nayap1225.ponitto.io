const mediaquery = window.matchMedia("(max-width:991px)");
mediaquery.addEventListener("change", contentAnimation);

window.addEventListener("load", function () {
  btnToTopController();
  contentAnimation();
});
window.addEventListener("scroll", function () {
  btnToTopController();
  headercontroller();
  contentAnimation();
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

function headercontroller() {
  const header = document.querySelector("#header");
  if (!header) return;
  const headerHeight = header.offsetHeight;
  const headerPosition = getComputedStyle(header).top;
  const transPosition = headerHeight + parseInt(headerPosition);
  if (window.scrollY > transPosition) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function contentAnimation() {
  const ismobile = mediaquery.matches;
  const targetContents = document.querySelectorAll(".animation");
  if (!targetContents.length) return;
  targetContents.forEach((item) => {
    const offsetT = item.offsetTop;
    const screenH = window.innerHeight;
    const targetH = ismobile ? offsetT - screenH / 1.4 : offsetT - screenH / 1.6;
    if (window.scrollY > targetH) {
      item.classList.add("hasAnimation");
    }
  });
}
