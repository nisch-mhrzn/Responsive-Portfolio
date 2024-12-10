const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSection = btn.getAttribute("data-target"); // Get the target section (from data-target)

    // Remove 'active' class from all buttons and sections
    resumeBtns.forEach((button) => {
      button.classList.remove("active");
    });
    document.querySelectorAll(".resume-detail").forEach((detail) => {
      detail.classList.remove("active");
    });

    // Add 'active' class to the clicked button and the corresponding section
    btn.classList.add("active");
    document
      .querySelector(`.resume-detail.${targetSection}`)
      .classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;
const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-img .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
//   imgSlide.style.transform = `translateX(calc(${index * -100}%-${
//     index * 2
//   }rem))`;
  imgSlide.style.transform = `translateX(-${index * 100}%)`; // Simplified without gaps
portfolioDetails.forEach(details => {
    details.classList.remove('active');
  });
  portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener("click", () => {
  if (index < 6) {
    index++;
    arrowLeft.classList.remove('disabled');
  } else {
    index = 3;
    arrowRight.classList.add('disabled');
  }
  activePortfolio();
});
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowLeft.classList.remove('disabled');
  } else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activePortfolio();
});
