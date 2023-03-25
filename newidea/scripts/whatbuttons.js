const carousel = document.getElementById("carousel");
const articles = document.querySelectorAll(".article");

function rightButtonPressed() {
  const slideWidth = articles[0].clientWidth;
  carousel.scrollLeft -= slideWidth;
}

function leftButtonPressed() {
  const slideWidth = articles[0].clientWidth;
  carousel.scrollLeft += slideWidth;
}

window.addEventListener("resize", function () {
  // TODO: rework this
  carousel.scrollLeft = articles[0].clientWidth % carousel.scrollLeft;
});
