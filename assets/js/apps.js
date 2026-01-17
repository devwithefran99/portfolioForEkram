
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
 
  $(document).ready(function () {
    let index = 0;
    const slides = $('.feedback-item');
    const dots = $('.dot');

    slides.hide().eq(0).show(); // first slide visible

    setInterval(function () {
      let current = slides.eq(index);

      // fade out + move right
      current.animate(
        {
          opacity: 0,
          marginRight: '40px'
        },
        600,
        function () {
          current.hide().css({
            opacity: 1,
            marginRight: '0'
          });

          dots.eq(index).removeClass('active');

          index = (index + 1) % slides.length;

          let next = slides.eq(index);

          // start from left
          next.css({
            display: 'block',
            opacity: 0,
            marginRight: '-60px'
          });

          // fade in + move to center
          next.animate(
            {
              opacity: 1,
              marginRight: '0'
            },
            600
          );

          dots.eq(index).addClass('active');
        }
      );
    }, 2000);
  });


   AOS.init();

   

