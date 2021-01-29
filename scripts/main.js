
const barsIcon = document.querySelector(".bars-icon");
const navBar = document.querySelector(".nav-bar");
const links = document.querySelector(".links");
const verticalLinks = document.querySelector('.vertical-links');
const section = document.querySelector('section');
const barsIconSizeQuery = window.matchMedia('(max-width: 500px)');
const verticalNavQuery = window.matchMedia('(min-width: 850px)');

function verticalNav() {
  section.style.display = "none";
  navBar.style.position = "relative";
  links.style.cssText = "height: 12vh; align-items: center; padding-bottom: 0";
  verticalLinks.style.cssText = "display: flex; height: 88vh";
}

function navBarReturn() {
  section.style.display = "block";
  navBar.style.position = "fixed";
  links.style.cssText = "padding-bottom: 3rem";
  verticalLinks.style.cssText = "display: none";
}

barsIcon.addEventListener('click', (e => {
  if (section.style.display != 'none') {
    verticalNav();
  } else if (section.style.display == 'none') {
    navBarReturn();
  }
}));

function handleNavChange(e) {

  if (verticalNavQuery.matches && section.style.display == 'none') {
    navBarReturn();
  }

}

verticalNavQuery.addListener(handleNavChange);

handleNavChange(verticalNavQuery);

function handleIconChange(e) {

  if (barsIconSizeQuery.matches) {
    barsIcon.classList.remove('fa-4x');
    barsIcon.classList.add('fa-3x');
  } else {
    barsIcon.classList.remove('fa-3x');
    barsIcon.classList.add('fa-4x');
  }

}

barsIconSizeQuery.addListener(handleIconChange);

handleIconChange(barsIconSizeQuery);




