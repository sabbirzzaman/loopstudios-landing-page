hamBurgerMenu = document.querySelector("#hamBurgerMenu");
header = document.querySelector(".header");
body = document.querySelector("body");
toggleMenu = document.querySelector(".navigation__mobile_menu");

hamBurgerMenu.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
  } else {
    header.classList.add("open");
    body.classList.add("noscroll")

  }
});

hamBurgerMenu.addEventListener("click", function () {
  if (toggleMenu.classList.contains("slide")) {
    toggleMenu.classList.remove("slide");
  } else {
    toggleMenu.classList.add("slide");
  }
});
