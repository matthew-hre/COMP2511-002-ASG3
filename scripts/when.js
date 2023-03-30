let timelineArticles = document.getElementsByClassName("timeline-article")[0];

function changeArticle(idx) {
  for (let i = 0; i < timelineArticles.children.length; i++) {
    timelineArticles.children[i].classList.remove("visible");
  }
  timelineArticles.children[idx].classList.add("visible");
}
