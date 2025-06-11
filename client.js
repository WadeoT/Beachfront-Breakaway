// client.js

// Wait for the DOM to load before running script
document.addEventListener('DOMContentLoaded', () => {
  // Get buttons
  const checkAvailabilityBtn = document.querySelector('#booking button:nth-child(1)');
  const contactUsBtn = document.querySelector('#booking button:nth-child(2)');

  checkAvailabilityBtn.addEventListener('click', () => {
    alert('Booking feature coming soon! Please contact us at booking@beachfrontbreakaway.com');
  });

  contactUsBtn.addEventListener('click', () => {
    alert('Contact us feature coming soon! Please email info@beachfrontbreakaway.com');
  });

  // Optional: Smooth scrolling for anchor links if you add a nav later
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

