$(document).ready(function(){
  $('.business_slider').owlCarousel({
    stagePadding: 50, // This is the stagePadding option
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    touchDrag: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 5
        }
    }
  });  

  


  $('.trusted').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 1000, // Adjust autoplay timeout as needed
    autoplaySpeed: 1000, // Adjust autoplay speed as needed
    autoplayHoverPause: true,
    pullDrag: false,
    touchDrag: false,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:5,
        nav:true,
        loop:false
      }
    }
  });



  
  
});



// Selecting necessary elements
const sidebar = document.querySelector('.sidebar');
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.sidebar_close');

// Function to open sidebar
const openSidebar = () => {
  sidebar.classList.remove('close_sidebar');
  sidebar.classList.add('open_sidebar');
};

// Function to close sidebar
const closeSidebar = () => {
    sidebar.classList.remove('open_sidebar');
  sidebar.classList.add('close_sidebar');
};

// Adding event listeners to hamburger button and close button
hamburgerBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);






function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = +counter.querySelector('span:nth-last-child(2)').innerText; // Get the numerical value from the second-to-last span
    const increment = target / 100; // Adjust this value for smoother animation
  
    let current = 0;
    const updateCounter = () => {
      current += increment;
      counter.querySelector('span:nth-last-child(2)').innerText = Math.ceil(current); // Update the second-to-last span with the animated value
      if (current < target) {
        requestAnimationFrame(updateCounter); // Using requestAnimationFrame for smoother animation
      } else {
        counter.querySelector('span:nth-last-child(2)').innerText = target; // Ensure the final value is correct
      }
    };

    updateCounter();
  });
}

let executed = false;

window.addEventListener('scroll', () => {
  const section = document.querySelector('.network');
  const sectionPosition = section.getBoundingClientRect().top;

  if (sectionPosition < window.innerHeight && !executed) {
    animateCounters();
    executed = true;
  }
});













document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const gallery = document.getElementById("image-gallery");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          const filter = this.dataset.filter;

          // Hide all images initially
          const images = gallery.querySelectorAll(".gallery-item");
          images.forEach(image => {
              image.style.display = "none";
          });

          // Show images with matching category
          const filteredImages = gallery.querySelectorAll(`[data-tags~="${filter}"]`);
          filteredImages.forEach(image => {
              image.style.display = "";
          });

          buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to the clicked button
        this.classList.add("active");
      });
  });







  // Get the parent container
const groups = document.querySelectorAll('.group');

groups.forEach(group => {
  group.addEventListener('click', function(event) {
    const clickedSection = group.closest('.accordion-section');
    
    // Remove 'active' class from all accordion sections
    document.querySelectorAll('.accordion-section').forEach(section => {
      section.classList.remove('active');
    });

    // Add 'active' class to the clicked section
    clickedSection.classList.add('active');

    // Find the inner element with the class 'group' and add 'active' class to it
    clickedSection.querySelector(".group").classList.add('active');
  });
});

});




