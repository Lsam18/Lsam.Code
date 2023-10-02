// Function to handle smooth scrolling when a navigation link is clicked
function smoothScrollToTarget(targetId) {
   const targetSection = document.querySelector(targetId);
   if (targetSection) {
       window.scrollTo({
           top: targetSection.offsetTop,
           behavior: 'smooth'
       });
   }
}

// Add click event listeners to navbar links for smooth scrolling
document.querySelectorAll('.navbar a').forEach(link => {
   link.addEventListener('click', (e) => {
       e.preventDefault();
       const targetId = link.getAttribute('href');
       smoothScrollToTarget(targetId);
   });
});

// Toggle navigation menu on mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
});

// Handle scroll animations for sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

function handleScrollAnimations() {
   const top = window.scrollY;
   sections.forEach((sec) => {
       const offset = sec.offsetTop - 100;
       const height = sec.offsetHeight;
       const id = sec.getAttribute('id');
       const navLink = document.querySelector(`header nav a[href*=${id}]`);

       if (top >= offset && top < offset + height) {
           navLinks.forEach((link) => link.classList.remove('active'));
           navLink.classList.add('active');
           sec.classList.add('show-animate');
       } else {
           sec.classList.remove('show-animate');
       }
   });

   const header = document.querySelector('header');
   header.classList.toggle('sticky', top > 100);

   // Hide mobile menu when scrolling
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
}

// Add scroll event listener for handling scroll animations
window.addEventListener('scroll', handleScrollAnimations);

// Function to scroll to the top when the up arrow icon is clicked
function scrollToTop() {
   const targetSection = document.querySelector('#home'); // Replace with the appropriate ID
   if (targetSection) {
       smoothScrollToTarget('#home');
   }
}

// Add click event listener to the up arrow icon
const upArrowIcon = document.querySelector('.footer-iconTop i');
upArrowIcon.addEventListener('click', scrollToTop);

// Function to show/hide certifications and projects
function showItems(category) {
   const certificationBoxes = document.querySelectorAll('.certification-box');
   
   certificationBoxes.forEach((box) => {
       const boxCategory = box.getAttribute('data-category');
       const isBadge = boxCategory === 'badge';
       const isCertification = boxCategory === 'certification';

       if (category === 'all' || (category === 'badge' && isBadge) || (category === 'certification' && isCertification)) {
           box.classList.add('active', 'visible');
           void box.offsetWidth; // Trigger reflow for animation
       } else {
           box.classList.remove('active', 'visible');
       }
   });
}

// Show all certifications initially when the page loads
window.addEventListener('load', () => {
   showItems('all');
});

// Add event listeners to buttons for showing specific items
document.getElementById('showAllProjectsButton').addEventListener('click', () => {
   showItems('all');
});

document.getElementById('showBadgesButton').addEventListener('click', () => {
   showItems('badge');
});

document.getElementById('showCertificationsButton').addEventListener('click', () => {
   showItems('certification');
});
