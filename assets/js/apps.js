document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-container");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const bar = container.querySelector(".progress-bar");
        const valueBox = container.querySelector(".progress-value");
        const value = parseInt(bar.getAttribute("data-value"));
        let current = 0;

        const fill = setInterval(() => {
          if (current >= value) {
            clearInterval(fill);
          } else {
            current++;
            bar.style.width = current + "%";
            valueBox.textContent = current + "%";
            valueBox.style.left = current + "%";
          }
        }, 20);

        observer.unobserve(container);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(el => observer.observe(el));
});


// * my work slider
let index = 0;

function getVisibleCards() {
return window.innerWidth < 768 ? 1 : 3;
}


function slideNext() {
const track = document.getElementById('sliderTrack');
const cards = track.children.length;
const visible = getVisibleCards();
if (index < cards - visible) index++;
track.style.transform = `translateX(-${index * (100 / visible)}%)`;
}


function slidePrev() {
const track = document.getElementById('sliderTrack');
const visible = getVisibleCards();
if (index > 0) index--;
track.style.transform = `translateX(-${index * (100 / visible)}%)`;
}
// *my work slider ends

var typed = new Typed('.typed', 
    {
    strings: [''],
    typeSpeed: 60,
    backSpeed: 130,
    backDelay: 2000,
    startDelay: 200,
    loop: true,
  });

   AOS.init();

