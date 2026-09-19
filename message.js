// Flip Card Logic
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Falling Stars Logic
function createStar() {
  const container = document.getElementById('stars-container');
  if (!container) return;
  
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Randomize position, size, and duration
  const startLeft = Math.random() * 100;
  const size = Math.random() * 3 + 1; // 1px to 4px
  const duration = Math.random() * 3 + 2; // 2s to 5s
  
  star.style.left = `${startLeft}vw`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDuration = `${duration}s`;
  
  container.appendChild(star);
  
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

if (document.getElementById('stars-container')) {
  // Create stars periodically
  setInterval(createStar, 150);
  
  // Initial stars
  for(let i=0; i<20; i++) {
    setTimeout(createStar, Math.random() * 2000);
  }
}
