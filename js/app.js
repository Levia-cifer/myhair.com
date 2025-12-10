// Data
const services = [
  { id: 1, name: 'Haircut', desc: 'Professional haircut tailored to your style and face shape' },
  { id: 2, name: 'Hair Coloring', desc: 'Full color transformation from root to tip' },
  { id: 3, name: 'Blow Dry', desc: 'Professional blow dry styling for any occasion' },
  { id: 4, name: 'Hair Treatment', desc: 'Deep conditioning & repair treatments' },
  { id: 5, name: 'Keratin', desc: 'Keratin smoothing treatment for frizz control' },
  { id: 6, name: 'Braiding', desc: 'Creative braid styles for all occasions' },
];

const stylists = [
  { id: 1, name: 'Sarah Johnson', specialty: 'Color, Styling', rating: 4.9, image: 'assets/images/stylist-1.jpg' },
  { id: 2, name: 'Maria Garcia', specialty: 'Cutting, Color', rating: 4.8, image: 'assets/images/stylist-2.jpg' },
  { id: 3, name: 'Jessica Lee', specialty: 'All Services', rating: 5.0, image: 'assets/images/stylist-3.jpg' },
  { id: 4, name: 'Emma Wilson', specialty: 'Braiding, Styling', rating: 4.7, image: 'assets/images/stylist-4.jpg' },
];

const testimonials = [
  { id: 1, name: 'Jennifer M.', text: 'Amazing service! My hair has never looked better. Sarah truly understood exactly what I wanted.' },
  { id: 2, name: 'Lisa C.', text: 'The best salon experience I\'ve had. The staff is friendly, professional, and very attentive to detail.' },
  { id: 3, name: 'Amanda K.', text: 'I came in with damaged hair and left feeling like a new person. Highly recommend!' },
  { id: 4, name: 'Michelle R.', text: 'Every visit is fantastic. The color work is impeccable and they really care about your hair health.' },
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderStylists();
  renderTestimonials();
  setupNavigation();
  setupForms();
  setupThemeToggle();
  setupSmoothScroll();
});

// Render Services
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = services.map(service => `
    <div class="service-card">
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
      <button class="btn btn-primary" onclick="bookService(${service.id})">Book Now</button>
    </div>
  `).join('');
}

// Render Stylists
function renderStylists() {
  const container = document.getElementById('stylists-grid');
  if (!container) return;

  container.innerHTML = stylists.map(stylist => `
    <div class="stylist-card">
      <img src="${stylist.image}" alt="${stylist.name}" class="stylist-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22250%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22250%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22%3E👩%3C/text%3E%3C/svg%3E'">
      <div class="stylist-info">
        <h3 class="stylist-name">${stylist.name}</h3>
        <p class="stylist-specialty">${stylist.specialty}</p>
        <p class="stylist-rating">⭐ ${stylist.rating}/5.0</p>
        <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="viewStylist(${stylist.id})">View Profile</button>
      </div>
    </div>
  `).join('');
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-name">— ${testimonial.name}</p>
    </div>
  `).join('');
}

// Setup Navigation
function setupNavigation() {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Setup Forms
function setupForms() {
  // Contact Form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleContactForm(contactForm);
    });
  }

  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleNewsletterForm(newsletterForm);
    });
  }
}

function handleContactForm(form) {
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.\n\nWe'll contact you at ${email} soon!\n\n📞 0531392662\n📧 myhairdotcom@gmail.com`);
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
}

function handleNewsletterForm(form) {
  const email = form.querySelector('.newsletter-input').value;
  
  if (email && email.includes('@')) {
    alert(`Thank you for signing up!\n\nWe'll send hair tips and special offers to ${email}`);
    form.reset();
  } else {
    alert('Please enter a valid email address.');
  }
}

// Action Handlers
function bookService(id) {
  const service = services.find(s => s.id === id);
  alert(`Ready to book ${service.name}!\n\nPlease contact us:\n📞 0531392662\n📧 myhairdotcom@gmail.com`);
}

function viewStylist(id) {
  const stylist = stylists.find(s => s.id === id);
  alert(`${stylist.name}\n⭐ ${stylist.rating}/5.0\n${stylist.specialty}\n\nContact us to book with ${stylist.name}!`);
}

// Smooth Scroll Setup
function setupSmoothScroll() {
  // Add fade-in animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
  });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
}

// THEME TOGGLE
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}
