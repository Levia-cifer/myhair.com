// Data
const services = [
  { id: 1, name: 'Haircut', emoji: '✂️', category: 'cutting', desc: 'Professional haircut tailored to your style' },
  { id: 2, name: 'Hair Coloring', emoji: '🎨', category: 'coloring', desc: 'Full color transformation' },
  { id: 3, name: 'Blow Dry', emoji: '💨', category: 'styling', desc: 'Professional blow dry styling' },
  { id: 4, name: 'Hair Treatment', emoji: '🌿', category: 'treatment', desc: 'Deep conditioning & repair' },
  { id: 5, name: 'Keratin', emoji: '✨', category: 'treatment', desc: 'Keratin smoothing treatment' },
  { id: 6, name: 'Braiding', emoji: '🪢', category: 'styling', desc: 'Creative braid styles' },
];

const stylists = [
  { id: 1, name: 'Sarah Johnson', rating: 4.9, reviews: 128, emoji: '👩‍🦱', image: 'assets/images/stylist-1.jpg', specialties: 'Color, Styling' },
  { id: 2, name: 'Maria Garcia', rating: 4.8, reviews: 95, emoji: '👩', image: 'assets/images/stylist-2.jpg', specialties: 'Cutting, Color' },
  { id: 3, name: 'Jessica Lee', rating: 5.0, reviews: 76, emoji: '👩‍🦳', image: 'assets/images/stylist-3.jpg', specialties: 'All Services' },
  { id: 4, name: 'Emma Wilson', rating: 4.7, reviews: 112, emoji: '👩', image: 'assets/images/stylist-4.jpg', specialties: 'Braiding, Styling' },
];

const gallery = [
  { id: 2, title: 'Summer Color', emoji: '☀️', image: 'assets/images/hero-styling.jpg', category: 'color' },
  { id: 3, title: 'Curly Waves', emoji: '〰️', image: 'assets/images/hero-styling.jpg', category: 'styling' },
  { id: 4, title: 'Bold Pixie', emoji: '⚡', image: 'assets/images/gallery-cutting.jpg', category: 'cutting' },
  { id: 5, title: 'Balayage', emoji: '🎨', image: 'assets/images/hero-styling.jpg', category: 'color' },
  { id: 6, title: 'Festival Braids', emoji: '✨', image: 'assets/images/hero-styling.jpg', category: 'styling' },
];

const videos = [
  { id: 1, src: 'video/image/Millie/Millie/VID-20251209-WA0146.mp4', title: 'Hair Transformation 1' },
  { id: 2, src: 'video/image/Millie/Millie/VID-20251209-WA0147.mp4', title: 'Hair Transformation 2' },
  { id: 3, src: 'video/image/Millie/Millie/VID-20251209-WA0150.mp4', title: 'Hair Transformation 3' },
  { id: 4, src: 'video/image/Millie/Millie/VID-20251209-WA0151.mp4', title: 'Hair Transformation 4' },
  { id: 5, src: 'video/image/Millie/Millie/VID-20251209-WA0152.mp4', title: 'Hair Transformation 5' },
  { id: 6, src: 'video/image/Millie/Millie/VID-20251209-WA0153.mp4', title: 'Hair Transformation 6' },
  { id: 7, src: 'video/image/Millie/Millie/VID-20251209-WA0155.mp4', title: 'Hair Transformation 7' },
  { id: 8, src: 'video/image/Millie/Millie/VID-20251209-WA0157.mp4', title: 'Hair Transformation 8' },
  { id: 9, src: 'video/image/Millie/Millie/VID-20251209-WA0159.mp4', title: 'Hair Transformation 9' },
  { id: 10, src: 'video/image/Millie/Millie/VID-20251209-WA0175.mp4', title: 'Hair Transformation 10' },
  { id: 11, src: 'video/image/Millie/Millie/VID-20251209-WA0176.mp4', title: 'Hair Transformation 11' },
  { id: 12, src: 'video/image/Millie/Millie/VID-20251209-WA0177.mp4', title: 'Hair Transformation 12' },
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderStylists();
  renderGallery();
  setupFilters();
  setupInteractions();
  setupNavigation();
  setupVideoPlayer();
  setupThemeToggle();
});

// Render Services
function renderServices() {
  const container = document.getElementById('services-grid');
  container.innerHTML = services.map(service => `
    <div class="card" data-service-id="${service.id}">
      <canvas class="card-img-canvas" data-emoji="${service.emoji}" width="400" height="200"></canvas>
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
      <div class="card-meta">
        <button class="btn btn-primary" onclick="inquireService(${service.id})" style="width: 100%;">Inquire Now</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#services-grid .card').forEach((card, idx) => {
    card.style.animation = `staggerIn ${0.8 + idx * 0.1}s ease-out`;
    const canvas = card.querySelector('.card-img-canvas');
    if (canvas) generateEmojiPreview(canvas, canvas.getAttribute('data-emoji') || '✂️');
  });
}

// Render Stylists
function renderStylists() {
  const container = document.getElementById('stylists-grid');
  container.innerHTML = stylists.map(stylist => `
    <div class="card" data-stylist-id="${stylist.id}">
      <img src="${stylist.image}" alt="${stylist.name}" class="card-img-canvas" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2224%22%3E${stylist.emoji}%3C/text%3E%3C/svg%3E'">
      <h3>${stylist.name}</h3>
      <p>${stylist.specialties}</p>
      <div class="card-meta">
        <span class="rating">⭐ ${stylist.rating} (${stylist.reviews})</span>
      </div>
      <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="viewStylist(${stylist.id})">View Profile</button>
    </div>
  `).join('');

  document.querySelectorAll('#stylists-grid .card').forEach((card, idx) => {
    card.style.animation = `staggerIn ${0.8 + idx * 0.1}s ease-out`;
  });
}

// Render Gallery
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  updateGalleryFilter('all');
}

function updateGalleryFilter(category) {
  const container = document.getElementById('gallery-grid');
  const filtered = category === 'all' ? gallery : gallery.filter(g => g.category === category);
  
  container.innerHTML = filtered.map(item => `
    <div class="card" style="cursor: pointer;" onclick="viewGalleryItem(${item.id})">
      <img src="${item.image}" alt="${item.title}" class="card-img-canvas" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2224%22%3E${item.emoji}%3C/text%3E%3C/svg%3E'">
      <h3>${item.title}</h3>
      <p style="font-size: 0.85rem; color: #999;">${item.category}</p>
    </div>
  `).join('');

  document.querySelectorAll('#gallery-grid .card').forEach((card, idx) => {
    card.style.animation = `staggerIn ${0.8 + idx * 0.1}s ease-out`;
  });
}

// Setup Filters
function setupFilters() {
  const serviceCategories = [...new Set(services.map(s => s.category))];
  const galleryCategories = [...new Set(gallery.map(g => g.category))];

  const serviceFilters = document.getElementById('service-filters');
  serviceFilters.innerHTML = `
    <button class="filter-btn active" onclick="filterServices('all')">All</button>
    ${serviceCategories.map(cat => `<button class="filter-btn" onclick="filterServices('${cat}')">${cat}</button>`).join('')}
  `;

  const galleryFilters = document.getElementById('gallery-filters');
  galleryFilters.innerHTML = `
    <button class="filter-btn active" onclick="filterGallery('all')">All</button>
    ${galleryCategories.map(cat => `<button class="filter-btn" onclick="filterGallery('${cat}')">${cat}</button>`).join('')}
  `;
}

function filterServices(category) {
  const filtered = category === 'all' ? services : services.filter(s => s.category === category);
  const container = document.getElementById('services-grid');
  
  container.innerHTML = filtered.map(service => `
    <div class="card" data-service-id="${service.id}">
      <div class="card-img">${service.emoji}</div>
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
      <div class="card-meta">
        <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">$${service.price}</span>
        <button class="btn btn-primary" onclick="bookService(${service.id})">Book Now</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#service-filters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === category);
  });
}

function filterGallery(category) {
  updateGalleryFilter(category);
  document.querySelectorAll('#gallery-filters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === category);
  });
}

// Interactions
function inquireService(id) {
  const service = services.find(s => s.id === id);
  alert(`📧 Thank you for your interest in ${service.name}!\n\nPlease contact us at:\n📞 0531392662\n📧 myhairdotcom@gmaildotcom\n\nWe'll be happy to provide you with more details!`);
}

function viewStylist(id) {
  const stylist = stylists.find(s => s.id === id);
  alert(`👤 ${stylist.name}\n⭐ Rating: ${stylist.rating}/5 (${stylist.reviews} reviews)\n\n${stylist.specialties}`);
}

function viewGalleryItem(id) {
  const item = gallery.find(g => g.id === id);
  alert(`📸 ${item.title}\n\nThis is a preview of our work in the ${item.category} category!`);
}

// Setup Interactions
function setupInteractions() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href*="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('nav').classList.remove('mobile-open');
      }
    });
  });
}

// Mobile Navigation
function setupNavigation() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
  }

  // Close menu on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });
}

// Scroll animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// VIDEO PLAYER CONTROLS
function setupVideoPlayer() {
  const video = document.getElementById('main-video');
  const playBtn = document.getElementById('play-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeBtn = document.getElementById('volume-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const videoPlayer = document.getElementById('main-video-player');

  // Format time helper
  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Play/Pause
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = '⏸';
    } else {
      video.pause();
      playBtn.textContent = '▶';
    }
  });

  video.addEventListener('play', () => {
    playBtn.textContent = '⏸';
  });

  video.addEventListener('pause', () => {
    playBtn.textContent = '▶';
  });

  // Duration update
  video.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(video.duration);
  });

  // Progress bar
  video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressFill.style.width = percentage + '%';
    currentTimeEl.textContent = formatTime(video.currentTime);
  });

  // Click on progress bar to seek
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
  });

  // Volume control
  volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
    updateVolumeIcon();
  });

  volumeBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      volumeSlider.value = 100;
    } else {
      video.muted = true;
      volumeSlider.value = 0;
    }
    updateVolumeIcon();
  });

  const updateVolumeIcon = () => {
    if (video.muted || video.volume === 0) {
      volumeBtn.textContent = '🔇';
    } else if (video.volume < 0.5) {
      volumeBtn.textContent = '🔉';
    } else {
      volumeBtn.textContent = '🔊';
    }
  };

  // Fullscreen
  fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullscreenBtn.textContent = '⛶';
    } else {
      videoPlayer.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      fullscreenBtn.textContent = '✕';
    }
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      playBtn.click();
    } else if (e.key === 'f') {
      fullscreenBtn.click();
    } else if (e.key === 'm') {
      volumeBtn.click();
    } else if (e.key === 'ArrowRight') {
      video.currentTime += 5;
    } else if (e.key === 'ArrowLeft') {
      video.currentTime -= 5;
    } else if (e.key === 'ArrowUp') {
      video.volume = Math.min(video.volume + 0.1, 1);
      volumeSlider.value = video.volume * 100;
      updateVolumeIcon();
    } else if (e.key === 'ArrowDown') {
      video.volume = Math.max(video.volume - 0.1, 0);
      volumeSlider.value = video.volume * 100;
      updateVolumeIcon();
    }
  });

  // Render video thumbnails
  renderVideoThumbnails();

  // Auto-hide controls
  let controlsTimeout;
  videoPlayer.addEventListener('mousemove', () => {
    clearTimeout(controlsTimeout);
    if (video.parentElement) {
      controlsTimeout = setTimeout(() => {
        if (!video.paused) {
          video.parentElement.querySelector('.video-controls').style.opacity = '0';
        }
      }, 3000);
    }
  });

  videoPlayer.addEventListener('mouseleave', () => {
    clearTimeout(controlsTimeout);
  });
}

function renderVideoThumbnails() {
  const container = document.getElementById('video-grid');
  const video = document.getElementById('main-video');

  container.innerHTML = videos.map((v, idx) => `
    <div class="video-thumbnail ${idx === 0 ? 'active' : ''}" onclick="playVideo('${v.src}', this)">
      <canvas class="video-thumbnail-canvas" data-src="${v.src}" width="200" height="120"></canvas>
      <div class="video-thumbnail-play-icon">▶</div>
      <div class="video-thumbnail-title">${v.title}</div>
    </div>
  `).join('');

  document.querySelectorAll('.video-thumbnail').forEach((thumb, idx) => {
    thumb.style.animation = `staggerIn ${0.8 + idx * 0.1}s ease-out`;
    generateVideoThumbnail(thumb.querySelector('canvas'));
  });
}

function generateVideoThumbnail(canvas) {
  const src = canvas.getAttribute('data-src');
  const video = document.createElement('video');
  
  video.src = src;
  video.crossOrigin = 'anonymous';
  
  video.addEventListener('loadedmetadata', () => {
    // Seek to 25% of the video for a better thumbnail
    video.currentTime = video.duration * 0.25;
  });

  video.addEventListener('seeked', () => {
    try {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    } catch (e) {
      // Fallback if canvas drawing fails
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🎬', canvas.width / 2, canvas.height / 2);
    }
  }, { once: true });

  video.addEventListener('error', () => {
    // Fallback for error cases
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('📹', canvas.width / 2, canvas.height / 2);
  });
}

// Generate simple emoji/graphic preview for canvases used in cards
function generateEmojiPreview(canvas, emoji) {
  try {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // background gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#fff5ee');
    grad.addColorStop(1, '#ffe8d6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // subtle overlay using primary colors
    const overlay = ctx.createLinearGradient(0, 0, w, h);
    overlay.addColorStop(0, 'rgba(255,140,0,0.06)');
    overlay.addColorStop(1, 'rgba(255,107,53,0.06)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0, 0, w, h);

    // draw emoji centered
    const fontSize = Math.floor(h * 0.6);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#333';
    ctx.fillText(emoji || '📷', w / 2, h / 2 + 4);
  } catch (e) {
    // fallback: simple fill and text
    try {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#f6f6f6';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#333';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji || '📷', canvas.width / 2, canvas.height / 2);
    } catch (err) {
      // ignore
    }
  }
}

function playVideo(src, element) {
  const video = document.getElementById('main-video');
  const playBtn = document.getElementById('play-btn');

  video.src = src;
  video.play();
  playBtn.textContent = '⏸';

  // Update active state
  document.querySelectorAll('.video-thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  element.classList.add('active');
}

// THEME TOGGLE
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIndicator = document.getElementById('theme-indicator');
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    themeIndicator.textContent = 'Dark';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
      themeIndicator.textContent = 'Dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      themeIndicator.textContent = 'Light';
      localStorage.setItem('theme', 'light');
    }
  });
}
