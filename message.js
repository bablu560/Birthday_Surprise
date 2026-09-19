// Flip Card Logic
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    // If the clicked card is already flipped, just flip it back
    if (card.classList.contains('flipped')) {
      card.classList.remove('flipped');
    } else {
      // First, flip all cards back
      document.querySelectorAll('.flip-card').forEach(c => {
        c.classList.remove('flipped');
      });
      // Then, flip the clicked card
      card.classList.add('flipped');
    }
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
  setInterval(createStar, 50);
  
  // Initial stars
  for(let i=0; i<50; i++) {
    setTimeout(createStar, Math.random() * 2000);
  }
}

// Dynamic Falling Hearts on Cards Logic
function createCardHeart() {
  const cards = document.querySelectorAll('.flip-card-front');
  cards.forEach((card, index) => {
    // 40% chance to spawn a heart per card per interval (keeps it looking natural but busy)
    if (Math.random() > 0.6) {
      const heart = document.createElement('div');
      heart.classList.add('card-heart');
      heart.classList.add(`h${index + 1}`); // Uses the h1-h10 colors defined in CSS
      heart.innerHTML = '&hearts;';
      
      const startLeft = Math.random() * 80 + 10; // 10% to 90% across the card width
      const duration = Math.random() * 2 + 2; // 2s to 4s
      const size = Math.random() * 1.5 + 1; // 1rem to 2.5rem
      
      heart.style.left = `${startLeft}%`;
      heart.style.fontSize = `${size}rem`;
      heart.style.animationDuration = `${duration}s`;
      
      card.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  });
}

// Start spawning hearts on cards every 400ms
if (document.querySelector('.flip-card-front')) {
  setInterval(createCardHeart, 400);
}
