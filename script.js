const navLinks = document.querySelectorAll("header nav a");
const logoLinks = document.querySelector(".logo");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
menuIcon.addEventListener("click",() => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
document.getElementById("download-cv").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior

  // Create download links for two files
  const cv1 = document.createElement("a");
  cv1.href = "Nischal-Maharjan-Resume.pdf"; // Replace with your actual file path
  cv1.download = "Python_cv.pdf"; // The name for the downloaded file
  cv1.style.display = "none";
  document.body.appendChild(cv1);
  cv1.click();
  document.body.removeChild(cv1);

  const cv2 = document.createElement("a");
  cv2.href = "Nischal-Maharjan-Frontend.pdf"; // Replace with your actual file path
  cv2.download = "React_cv.pdf"; // The name for the downloaded file
  cv2.style.display = "none";
  document.body.appendChild(cv2);
  cv2.click();
  document.body.removeChild(cv2);
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");
  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);
  sections.forEach(section=>{
    section.classList.remove('active');
  
  })
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => {
          sections[idx].classList.add("active");
      },1100)
    }
  });
});
logoLinks.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
  },1100)
  }
});
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
  const imgSlide = document.querySelector(".portfolio-img .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");
  //   imgSlide.style.transform = `translateX(calc(${index * -100}%-${
  //     index * 2
  //   }rem))`;
  imgSlide.style.transform = `translateX(-${index * 100}%)`; // Simplified without gaps
  portfolioDetails.forEach((details) => {
    details.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});

arrowRight.addEventListener("click", () => {
  if (index < 5) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 3;
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});