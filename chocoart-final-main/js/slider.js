const slider = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const nomeProduto = document.getElementById('nomeProduto');

// Adicione os nomes dos produtos na ordem dos slides
const nomes = ["Choco Paleta", "Choco Barra", "Choco Estojo"];

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
  nomeProduto.innerText = nomes[currentSlide]; // Atualiza o nome do produto
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlider();
}

hideSlider();
showSlider();

nextBtn.addEventListener('click', nextSlider);
prevBtn.addEventListener('click', prevSlider);