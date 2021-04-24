var planches = document.querySelectorAll("figure img");
for (let i = 0; i < planches.length; i++) {}
var currentSlide = planches[0];
var nextSlide = planches[0].nextElementSibling;
var previousSlide = false;
console.log(planches);
console.log(planches[0]);
console.log("current slide = ", currentSlide);
console.log("previous slide = ", previousSlide);
console.log("next slide = ", nextSlide);

// navigation par les touches de clavier

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      console.log("arrowleft");
      if (currentSlide === planches[0]) {
        previousChronic();
      } else {
        clicGauche();
      }
      break;
    case "ArrowRight":
      console.log("arrowright");
      clicDroit();
      if (nextSlide === document.querySelector("figcaption")) {
        window.addEventListener("keydown", (e) => {
          switch (e.key) {
            case "ArrowRight":
              nextChronic();
              break;
          }
        });
      }
  }
});

document
  .getElementById("clicDroit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    clicDroit();
  });

document
  .getElementById("clicGauche")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (currentSlide === planches[0]) {
      console.log("condition planche 0");
      console.log(currentSlide);
      console.log(planches[0]);
      previousChronic();
    } else {
      clicGauche();
    }
  });

function nextChronic() {
  window.location.href = document.getElementById(
    "clicDroit"
  ).parentElement.href;
}

function previousChronic() {
  window.location.href = document.getElementById(
    "clicGauche"
  ).parentElement.href;
}

function clicGauche() {
  currentSlide.classList.add("hidden");
  nextSlide = currentSlide;
  currentSlide = previousSlide;
  previousSlide = previousSlide.previousElementSibling;
  currentSlide.classList.remove("hidden");
  console.log("current slide = ", currentSlide);
  console.log("previous slide = ", previousSlide);
  console.log("next slide = ", nextSlide);
  if (currentSlide === planches[0]) {
    document
      .getElementById("clicGauche")
      .addEventListener("click", function () {
        previousChronic();
      });
  }
}

function clicDroit() {
  currentSlide.classList.add("hidden");
  previousSlide = currentSlide;
  currentSlide = nextSlide;
  nextSlide = nextSlide.nextElementSibling;
  currentSlide.classList.remove("hidden");
  console.log("current slide = ", currentSlide);
  console.log("previous slide = ", previousSlide);
  console.log("next slide = ", nextSlide);
  if (nextSlide === document.querySelector("figcaption")) {
    document.getElementById("clicDroit").addEventListener("click", function () {
      nextChronic();
    });
  }
}
