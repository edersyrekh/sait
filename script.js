
let currentSlide = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slide'); // Получаем все слайды
const totalSlides = slides.length; // Общее количество слайдов

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active'); // Убираем класс 'active' у всех слайдов
    });
    slides[index].classList.add('active'); // Устанавливаем класс 'active' на текущем слайде
}

// Функция для автоматической смены слайдов
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Переход к следующему слайду
    showSlide(currentSlide); // Отображаем текущий слайд
}

// Меняем слайды каждые 3 секунды
setInterval(nextSlide, 3000); // Вызываем функцию смены слайда каждые 3000 миллисекунд
showSlide(currentSlide); // Показываем первый слайд при загрузке



 

document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Запись успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});


