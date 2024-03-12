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
