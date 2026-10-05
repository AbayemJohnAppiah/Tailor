/* Header */

document.getElementById("img-container").innerHTML = "<a href='index.html'><img src='images/icon/logo.png' class='logo'></a>"

document.getElementById("nav").innerHTML = "<a href='index.html'>Home</a><a href='index.html#services-container'>Service</a><a href='index.html#about'>About</a><a href='index.html#contant'>Contant</a><a href='gallery.html'>Gallery</a>"


const header = document.querySelector("header");
const menuBtn = document.getElementById("menu-btn");

// open and close the menu
menuBtn.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

// close the menu after tapping a link
document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});

