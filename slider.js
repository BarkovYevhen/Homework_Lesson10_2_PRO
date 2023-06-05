let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderNextBtn = document.querySelector(".slider-next");
const sliderPrevBtn = document.querySelector(".slider-prev");

sliderNextBtn.addEventListener("click", function () {
  offset += 640;
  if (offset > 1920) {
    offset = 1920;
    sliderNextBtn.style.display = "none";
  }
  sliderLine.style.left = -offset + "px";
  sliderPrevBtn.style.display = "block";
});

sliderPrevBtn.addEventListener("click", function () {
  offset -= 640;
  if (offset < 0) {
    offset = 0;
    sliderPrevBtn.style.display = "none";
  }
  sliderLine.style.left = -offset + "px";
  sliderNextBtn.style.display = "block";
});
