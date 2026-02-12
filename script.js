const button = document.getElementById('loveBtn');
const message = document.getElementById('loveMsg');
const heartsContainer = document.getElementById('hearts');

button.addEventListener('click', () => {
  message.style.display = 'block';
  button.style.display = 'none';
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 2 + Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
