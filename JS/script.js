document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
 
    navbarLinks.forEach(link => {
       link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetSection = document.querySelector(link.getAttribute('href'));
          targetSection.scrollIntoView({
             behavior: 'smooth'
          });
       });
    });
 });
 
 //toggle icons
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 };
 
 //scroll sections
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
 
 window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 100;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');
 
       if (top >= offset && top < offset + height) {
          //active navbarLinks
          navLinks.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
          //active sections for animation on scroll
          sec.classList.add('show-animate');
       } else {
          sec.classList.remove('show-animate');
       }
    });
 
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
 
    //remove toggle icon when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 
    //footer animation
    let footer = document.querySelector('footer');
 
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
 };
 
 // Add smooth scroll to up arrow icon
 let upArrowIcon = document.querySelector('.footer-iconTop i');
 
 upArrowIcon.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector('#home'); // Replace with the appropriate ID
    targetSection.scrollIntoView({
       behavior: 'smooth'
    });
 });

// Function to show projects with a pop-up fade-in animation
function showProjects(category) {
   // Hide all projects first
   document.querySelectorAll('.certification-box').forEach((box) => {
       box.classList.remove('active', 'visible');
   });

   // Show only projects in the selected category
   document.querySelectorAll(`.certification-box.${category}`).forEach((project) => {
       project.classList.add('active');

       // Trigger a reflow to restart the animation
       void project.offsetWidth;

       project.classList.add('visible');
   });
}

// Function to show all projects with a pop-up fade-in animation
function showAllProjects() {
   // Show all projects
   document.querySelectorAll('.certification-box').forEach((box) => {
       box.classList.add('active');

       // Trigger a reflow to restart the animation
       void box.offsetWidth;

       box.classList.add('visible');
   });
}













