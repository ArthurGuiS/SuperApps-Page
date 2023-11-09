const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(slideIndex) {
    showSlide(slideIndex);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

function startSlideShow() {
    setInterval(nextSlide, 3000);
}

showSlide(currentSlide);
startSlideShow();


const abas = document.querySelectorAll('[data-aba]');

hideContent = () => {
    const contents = document.querySelectorAll('[data-content]')
    contents.forEach(content => content.classList.add('hide'))
}

activeContent = (valor) => {
    const content = document.querySelector(`[data-content="${valor}"]`)
    content.classList.remove('hide')
}

hideAba = () => {
    abas.forEach(aba => aba.classList.remove('active'))
}

activeAba = (aba) => {
    aba.classList.add('active')
}

abas.forEach(aba => aba.addEventListener('click', () => {
    const valor = aba.dataset.aba

    hideContent()
    hideAba()

    activeContent(valor)
    activeAba(aba)
}))