
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
  links.style.cssText = "height: 12vh; align-items: center; padding: 0";
  verticalLinks.style.cssText = "display: flex; height: 88vh";
}

function navBarReturn() {
  section.style.display = "block";
  navBar.style.position = "fixed";
  links.style.cssText = "padding: 3rem, auto";
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

/*

function handleIconChange(e) {

  if (barsIconSizeQuery.matches) {
    barsIcon.classList.remove('fa-2x');
    barsIcon.classList.add('fa-2x');
  } else {
    barsIcon.classList.remove('fa-2x');
    barsIcon.classList.add('fa-2x');
  }

}

barsIconSizeQuery.addListener(handleIconChange);

handleIconChange(barsIconSizeQuery);

*/

/*

function confirmSubmit(e) {
  e.preventDefault();
  let thankYou = document.createElement('div').innerHTML = "Thank You!";
  let form = document.querySelector("form");
  form.appendChild(thankYou);
  console.log(thankYou);
}

*/







