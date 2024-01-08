const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-show');
        } else {
            entry.target.classList.remove('animation-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animation-hidden');

hiddenElements.forEach((el) => observer.observe(el));