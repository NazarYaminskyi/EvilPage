// 1. Оголошуємо змінні на самому початку (у глобальній області видимості)
const overlay = document.getElementById('overlay');
const frames = document.querySelectorAll('.frame');

// Створюємо аудіо-об'єкт (переконайся, що sound.mp3 лежить в папці з index.html)
const audio = new Audio('./sound.mp3');
audio.loop = true;

let currentFrame = 0;
let animationInterval = null;

// 2. Функція для перемикання кадрів
function animate() {
  if (frames.length === 0) return;
  
  frames[currentFrame].classList.remove('active');
  currentFrame = (currentFrame + 1) % frames.length;
  frames[currentFrame].classList.add('active');
}

// 3. Запуск аудіо та анімації при кліку на заставку
if (overlay) {
  overlay.addEventListener('click', () => {
    // Приховуємо оверлей
    overlay.style.display = 'none';

    // Запускаємо звук (тепер змінна audio гарантовано існує)
    audio.play().catch(error => {
      console.error("Помилка відтворення звуку:", error);
    });

    // Запускаємо анімацію
    if (!animationInterval) {
      animationInterval = setInterval(animate, 150);
    }
  });
}