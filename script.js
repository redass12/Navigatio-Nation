const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navArray = [nav1, nav2, nav3, nav4, nav5];

function SlideInOut(directionToReplace, newDirection) {
  navArray.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${directionToReplace}-${i + 1}`,
      `slide-${newDirection}-${i + 1}`
    );
  });
}

function toogleNav() {
  console.log("toogleNave executed");
  // Toggle : Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  //Toggle : Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //Animate In - Nav Items
    SlideInOut("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    //Animate Out - Nav Items
    SlideInOut("in", "out");
  }
}

// Event Listeners
menuBars.addEventListener("click", toogleNav);
navArray.forEach((item) => {
  item.addEventListener("click", toogleNav);
});
