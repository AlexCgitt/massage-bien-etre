const text_elem2 = document.querySelector('#me .text');
const text_observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate_opacity');
        } else {
            entry.target.classList.remove('animate_opacity');
        }
    });
}, {
    threshold: 0.5
});
text_observer2.observe(text_elem2);

const img_elem = document.querySelector('#me .image');
const img_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate_img');
        } else {
            entry.target.classList.remove('animate_img');
        }
    });
}, {
    threshold: 0.5
});
img_observer.observe(img_elem);

const cards = document.querySelectorAll('.about-item');
const cardObserver = new IntersectionObserver(revealCards, {
    threshold: 0.2
});

cards.forEach(card => {
    cardObserver.observe(card);
});

function revealCards(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show-card');
            }, index * 200);
        }
    });
}