// const sr = ScrollReveal({
//     duration: 2400,
//     reset: true,
//   });
//   sr.reveal(".row",{
//     delay: 500,
//   });
function openAbout() {
  var about = document.getElementById("about");
  if  (about.style.display == "none") {
    about.style.display = "block";
    about.style.animationPlayState = "running"; 
  } else {
    about.style.display = "none";
  }
}
function closeHome() {
  var home = document.getElementById("home");
  if (home.style.display == "block") {
    home.style.animationPlayState = "running"; 
    home.style.display = "none";
  } else {
    home.style.display = "block";

  }
}
function closeNavbar() {
  var navbarnav = document.getElementById("navbarnav");
  if (navbarnav.style.display == "block") {
    navbarnav.style.display = "none";
  } else {
    navbarnav.style.display = "none"; 
  }
}
function openProjects() {
  var projects = document.getElementById("projects");
  if (projects.style.display == "none") {
    projects.style.display = "block";
  } else {
    projects.style.display = "none";
  }
}
function openContact() {
  var contact = document.getElementById("contact");
  if (contact.style.display == "none") {
    contact.style.display = "block";
  } else {
    contact.style.display = "none";
  }
}
// function openBtn() {
//   var btn = document.getElementById("btn");
//   if (btn.style.display == "none") {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none"; Buton acılma lazım olur
//   }
// }
// function openAbout() {
//   var about = document.getElementById("about");
//   if (about.style.display == "none") {
//     about.style.display = "block";
//     about.style.animationPlayState = "running"; 
//   } else {
//     about.style.animationName = "closingAnimation";
//     about.style.animationDuration = "0.5s";
//     about.style.animationFillMode = "forwards";
//     setTimeout(function() {
//       about.style.display = "none";
//       about.style.opacity = 1;
//       about.style.transform = "scale(1)";
//     }, 100);
//   }
// }