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

