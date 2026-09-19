const images = [
  "WhatsApp Image 2026-09-19 at 7.14.11 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.23 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.24 PM (1).jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.24 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.31 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.32 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.14.36 PM.jpeg",
  "WhatsApp Image 2026-09-19 at 7.16.24 PM (1).jpeg",
  "WhatsApp Image 2026-09-19 at 7.16.24 PM.jpeg"
];

function createFallingImage() {
  const container = document.getElementById('falling-images-container');
  if (!container) return;
  
  const img = document.createElement('img');
  img.classList.add('falling-pic');
  
  // Pick random image
  const randomImage = images[Math.floor(Math.random() * images.length)];
  img.src = randomImage;
  
  // Randomize position, size, and duration
  const startLeft = Math.random() * 100;
  const size = Math.random() * 40 + 30; // 30px to 70px
  const duration = Math.random() * 5 + 6; // 6s to 11s
  
  img.style.left = `${startLeft}vw`;
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
  img.style.objectFit = 'cover';
  img.style.animationDuration = `${duration}s`;
  
  container.appendChild(img);
  
  setTimeout(() => {
    img.remove();
  }, duration * 1000);
}

if (document.getElementById('falling-images-container')) {
  // Create images periodically
  setInterval(createFallingImage, 400); // one image every 400ms
  
  // Initial images so screen isn't empty
  for(let i=0; i<15; i++) {
    setTimeout(createFallingImage, Math.random() * 3000);
  }
}
