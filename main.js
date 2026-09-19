// Countdown Logic
const targetDate = new Date("2026-09-20T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.querySelector(".countdown-title").innerText = "IT'S YOUR BIRTHDAY! 🎉";
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  const elDays = document.getElementById("days");
  const elHours = document.getElementById("hours");
  const elMinutes = document.getElementById("minutes");
  const elSeconds = document.getElementById("seconds");
  
  if(elDays) elDays.innerText = days.toString().padStart(2, '0');
  if(elHours) elHours.innerText = hours.toString().padStart(2, '0');
  if(elMinutes) elMinutes.innerText = minutes.toString().padStart(2, '0');
  if(elSeconds) elSeconds.innerText = seconds.toString().padStart(2, '0');
}

// Update countdown every second if elements exist
if (document.getElementById("days")) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Falling Hearts Logic
function createHeart() {
  const container = document.getElementById('hearts-container');
  if (!container) return;
  
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  
  // Randomize position, size, and duration
  const startLeft = Math.random() * 100;
  const size = Math.random() * 1.5 + 0.5; // 0.5rem to 2rem
  const duration = Math.random() * 5 + 5; // 5s to 10s
  
  heart.style.left = `${startLeft}vw`;
  heart.style.fontSize = `${size}rem`;
  heart.style.animationDuration = `${duration}s`;
  
  container.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

if (document.getElementById('hearts-container')) {
  setInterval(createHeart, 300);
}
