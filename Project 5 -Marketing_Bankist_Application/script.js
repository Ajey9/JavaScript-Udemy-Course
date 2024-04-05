"use strict";

const allButtons = document.getElementsByTagName("button");

const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".button--close-modal");
const buttonOpenModal = document.querySelectorAll(".button--show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

buttonOpenModal.forEach((currentButton) =>
  currentButton.addEventListener("click", openModal)
);

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* --- Creating .cookie-message class programmatically --- */
const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML = `We use cookies for improving user experience and functionality to give you best experience.
  <button class = "button button--close-cookie">Got it!</button>`;
header.prepend(cookieMessage);

cookieMessage.style.backgroundColor = "#37383d";
cookieMessage.style.width = "120%";
cookieMessage.style.height =
  Number.parseFloat(getComputedStyle(cookieMessage).height, 10) + 20 + "px";

document
  .querySelector(".cookie-message")
  .addEventListener("click", function () {
    cookieMessage.remove();
  });

/* --- Implementing the Let's Find out more Button Scrolling Functionality --- */
const buttonScrollTo = document.querySelector(".button--scroll-to");
const section1 = document.querySelector("#section--1");

// alert("Current scroll from the top : " + window.pageYOffset);
buttonScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

/* --- Page Navigation --- */

/**  This approach creates EventListener on all the elements so time consuming if there are hundreds of elements are there.
 * 
document.querySelectorAll(".nav__link").forEach(function (currentElement) {
  currentElement.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Event Delegation approach for Page navigation, 
It only navigates when there is a matching criteria that is it contains the class we specify*/
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
  console.log(e.target);
});

console.log(document.querySelector(".header").parentElement.children);

/* --- Operations Tab Working --- */

const operationTabContainer = document.querySelector(
  ".operations__tab-container"
);
const operationsTab = document.querySelectorAll(".operations__tab");
const operationsContent = document.querySelectorAll(".operations__content");

operationTabContainer.addEventListener("click", function (e) {
  const buttonClicked = e.target.closest(".operations__tab");

  if (!buttonClicked) return;

  operationsTab.forEach((currentOperationsTab) =>
    currentOperationsTab.classList.remove("operations__tab--active")
  );
  operationsContent.forEach((currentTab) =>
    currentTab.classList.remove("operations__content--active")
  );

  buttonClicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${buttonClicked.dataset.tab}`)
    .classList.add("operations__content--active");
  console.log(buttonClicked);
});

/* --- Menu Fade Animation --- */

const nav = document.querySelector(".nav");

function handleHover(e) {
  if (e.target.classList.contains("nav__link")) {
    const linkHover = e.target;
    const siblings = linkHover.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((currentElement) => {
      if (currentElement !== linkHover) currentElement.style.opacity = this;
    });
  }
}

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

/*
 **--- Scrolling Animation ---**

const initialCoordinates = section1.getBoundingClientRect();
console.log(initialCoordinates);

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoordinates.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
 */

/* --- Scrolling Animation using IntersectionObserver API --- */
const nav_height = nav.getBoundingClientRect().height;

const header_title = document.querySelector(".header__title");

function observerCallBack(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const observerOptions = {
  root: null, //As we are interested in viewing entire Viewport
  threshold: 0.9,
  rootMargin: `${nav_height}px`,
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(header_title);

/* --- Sections Revealing Animation --- */

const allSections = document.querySelectorAll(".section");

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

/* --- Lazy Loading of images --- */

const imageTargets = document.querySelectorAll("img[data-src]");

function loadingImage(entries, observer) {
  const [entry] = entries;

  // if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-image");
  });

  observer.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(loadingImage, {
  root: null,
  threshold: 0,
  rootMargin: `100px`,
});

imageTargets.forEach((img) => imageObserver.observe(img));

/* --- Testimonial Slider Animation and Creating Dots on the slides --- */
const slide = document.querySelectorAll(".slide");
const sliderButtonRight = document.querySelector(".slider__button--right");
const sliderButtonLeft = document.querySelector(".slider__button--left");

const dotContainer = document.querySelector(".dots");
const maximumSliderLength = slide.length;

slide.forEach(
  (currentSlide, index) =>
    (currentSlide.style.transform = `translateX(${100 * index}%)`)
);

let currentSlideCount = 0;

function createDots() {
  slide.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class = "dots__dot" data-slide = "${index}"></button>`
    );
  });
}

function activateDots(slideNumber) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  // document
  //   .querySelector(`.dots--dot[data-slide = "${slideNumber}"]`)
  //   .classList.add("dots__dot--active");

  document
    .querySelector(`.dots__dot[data-slide = "${slideNumber}"]`)
    .classList.add("dots__dot--active");
}

function gotoSlide(sliderCount) {
  slide.forEach(
    (currentSlide, index) =>
      (currentSlide.style.transform = `translateX(${
        100 * (index - sliderCount)
      }%)`)
  );
}

function nextSlide() {
  if (currentSlideCount === maximumSliderLength - 1) {
    currentSlideCount = 0;
  } else {
    currentSlideCount++;
  }
  gotoSlide(currentSlideCount);
  activateDots(currentSlideCount);
}

function previousSlide() {
  if (currentSlideCount === 0) {
    currentSlideCount = maximumSliderLength - 1;
  } else {
    currentSlideCount--;
  }
  gotoSlide(currentSlideCount);
  activateDots(currentSlideCount);
}

function initializer() {
  gotoSlide(0);
  createDots();
  activateDots(0);
}
initializer();

sliderButtonRight.addEventListener("click", nextSlide);
sliderButtonLeft.addEventListener("click", previousSlide);
document.addEventListener("keydown", function (e) {
  e.key === "ArrowRight" && nextSlide();
  e.key === "ArrowLeft" && previousSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset; //slide variable in here states data-slide property from createDots function
    gotoSlide(slide);
    activateDots(slide);
  }
});

/*
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
*/
