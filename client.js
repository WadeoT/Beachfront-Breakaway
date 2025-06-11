// client.js

document.addEventListener('DOMContentLoaded', () => {
  // Select the header element
  const header = document.querySelector('header');

  // Clear any existing content inside header (optional)
  header.innerHTML = '';

  // Create the image element
  const img = document.createElement('img');
  img.src = 'https://us1-prod-images.disco-api.com/2020/07/24/3e2a1527-c6c4-33b4-a637-8389d99b29fd.jpeg?bf=0&f=jpg&p=true&q=70&w=1920';
  img.alt = 'Beachfront Breakaway';
  img.style.width = '100%';
  img.style.height = '60vh';
  img.style.objectFit = 'cover';
  img.style.display = 'block';

  // Create the overlay text container
  const textDiv = document.createElement('div');
  textDiv.className = 'header-text';

  // Create and add the h1 title
  const h1 = document.createElement('h1');
  h1.textContent = 'Beachfront Breakaway';

  // Create and add the slogan paragraph
  const p = document.createElement('p');
  p.textContent = 'Where nature meets comfort - your beachside escape';

  // Append title and slogan to the overlay container
  textDiv.appendChild(h1);
  textDiv.appendChild(p);

  // Append image and overlay text to header
  header.appendChild(img);
  header.appendChild(textDiv);

  // Your existing JS for buttons and smooth scroll can come here...
  // For example:
  const checkAvailabilityBtn = document.querySelector('#booking button:nth-child(1)');
  const contactUsBtn = document.querySelector('#booking button:nth-child(2)');

  checkAvailabilityBtn.addEventListener('click', () => {
    alert('Booking feature coming soon! Please contact us at booking@beachfrontbreakaway.com');
  });

  contactUsBtn.addEventListener('click', () => {
    alert('Contact us feature coming soon! Please email info@beachfrontbreakaway.com');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
