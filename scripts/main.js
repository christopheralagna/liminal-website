
const barsIcon = document.querySelector(".bars-icon");
const navBar = document.querySelector(".nav-bar");
const links = document.querySelector(".links");
const verticalLinks = document.querySelector('.vertical-links');
const section = document.querySelector('section');

barsIcon.addEventListener('click', (e => {
  if (section.style.display != 'none') {
    verticalNav();
  } else if (section.style.display == 'none') {
    navBarReturn();
  }
}));

function verticalNav() {
  section.style.display = "none";
  navBar.style.position = "relative";
  links.style.cssText = "height: 15vh";
  verticalLinks.style.cssText = "display: flex; height: 85vh";
}

function navBarReturn() {
  section.style.display = "block";
  navBar.style.position = "fixed";
  links.style.cssText = "height: auto";
  verticalLinks.style.cssText = "display: none";
}
