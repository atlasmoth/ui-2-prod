let counter = 1;
let prev;
const progressBar = document.querySelector(".progress-bar");

critical.addEventListener("click", (e) => {
  const allPs = [...document.querySelectorAll(".desc>p")];
  const selectDots = [...document.querySelectorAll(".dots")];
  const slides = [...document.querySelectorAll(".slide")];

  const sizes = [17, 50, 100];
  const rest = allPs.slice(1);
  const restDots = selectDots.slice(1);

  progressBar.style.width = `${sizes[counter]}%`;
  if (counter === 0) {
    restDots.forEach((r) => r.classList.remove("yellowBox"));
    rest.forEach((r) => r.classList.remove("yellowText"));
  } else {
    selectDots[counter].classList.add("yellowBox");
    allPs[counter].classList.add("yellowText");
  }

  if (prev === undefined) {
    slides[0].classList.remove("inside");
    slides[0].classList.add("outside");
    slides[1].classList.remove("outside");
    slides[1].classList.add("inside");
  } else {
    slides[prev].classList.remove("inside");
    slides[prev].classList.add("outside");
    slides[counter].classList.remove("outside");
    slides[counter].classList.add("inside");
  }
  prev = counter;

  counter = (counter + 1) % 3;
});
