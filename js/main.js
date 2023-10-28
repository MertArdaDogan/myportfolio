// const sr = ScrollReveal({
//     duration: 2400,
//     reset: true,
//   });
//   sr.reveal(".row",{
//     delay: 500,
//   });  
const home          = document.querySelector("#home");
const about         = document.querySelector("#about");
const navbarnav     = document.querySelector("#navbarnav");
const toggleButton  = document.querySelector("#toggleButton");
const resetButton   = document.querySelector("#resetButton");

  toggleButton.addEventListener("click", function() {
    navbarnav.style.display ="none";
    home.animate(
      [
        { opacity: '1' },
        { opacity: '0' },
      ],
      {
        duration: 1000, 
        fill: 'forwards'
      },
    ).onfinish = function() {
      home.style.display = "none";
      about.style.opacity = "1";
      about.style.display ="block"
      about.animate(
      [
        { opacity: '0' },
        { transform: 'translate3d(0, -100%, 0)'},
        { opacity: '0' },
        { opacity: '0.25' },
        { transform: 'translate3d(0, 0, 0)'},
        { opacity: '1' },
      ],
      {
        duration: 2000, 
        fill: 'forwards'
      });
      toggleButton.style.display = "none";
    };
  });
  resetButton.addEventListener("click", function() {
    about.animate(
      [
        { opacity: '1' },
        { transform: 'translate3d(0, 0, 0)' },
        { opacity: '0.25' },
        { opacity: '0' },
        { transform: 'translate3d(0, -100%, 0)' },
        { opacity: '0' },
      ],
      {
        duration: 2500,
        fill: 'forwards',
        easing: 'ease-in-out',
      }
    ).onfinish = function() {
      about.style.display = "none";
      home.style.display = "block";
      home.animate(
        [
          { opacity: '0' },
          { opacity: '1' },
      ], 
      {
        duration: 2000, 
        fill: 'forwards'
      });
      navbarnav.style.display ="flex";
    };
    toggleButton.style.display = "block";
  });

//   function closeAbout() {
//     var about = document.getElementById("about");
//     if (about.style.display == "none") {
//       about.style.display = "block";
//     }  else {
//       about.animate([
//           { opacity: '1' },
//           { transform: 'translate3d(0, 0%, 0)'},
//           { opacity: '0' },
//           { transform: 'translate3d(0, -100%, 0)'},
//           { opacity: '0' },
//       ], {
//           duration: 2500,
//       });
//       setTimeout(function() {
//           about.style.display = "none";
//       }, 2000); 
//     }
//   }
//   function openHome() {
//     var home = document.getElementById("home");
//     if (home.style.display == "block") {
//       setTimeout(function() {
//         home.style.display = "none";
//       }, 22000);
//     } else {
//       home.style.display = "block"; 
//     }
//   }
//   function openNavbar() {
//     var navbarnav = document.getElementById("navbarnav");
//     if (navbarnav.style.display == "none") {
//       navbarnav.style.display = "block";
//       navbarnav.style.display = "flex";
//     } else {
//       navbarnav.style.display = "none"; 
//       navbarnav.style.display = "flex";
//     }
//   }

// function openProjects() {
//   var projects = document.getElementById("projects");
//   if (projects.style.display == "none") {
//     projects.style.display = "block";
//   } else {
//     projects.style.display = "none";
//   }
// }
// function openContact() {
//   var contact = document.getElementById("contact");
//   if (contact.style.display == "none") {
//     contact.style.display = "block";
//   } else {
//     contact.style.display = "none";
//   }
// }
// function openBtn() {
//   var btn = document.getElementById("btn");
//   if (btn.style.display == "none") {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none"; Buton acılma lazım olur
//   }
// }