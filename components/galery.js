document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModal = document.getElementById('modalOpen');
    const closeModal = document.getElementById('modalClose');
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showSlide(index) {
        const slideWidth = slides.clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
});//k