window.addEventListener('load', function() {
    document.querySelector('.hero-img img').classList.add('loaded');
    document.querySelector('.hero-text .btn').classList.add('loaded');
});

const video_elem = document.querySelector('#video .video-wrapper');
const video_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate_video');
        } else {
            entry.target.classList.remove('animate_video');
        }
    });
}, {
    threshold: 0.5
});
video_observer.observe(video_elem);

const map_elem = document.querySelector('#where .map-wrapper');
const map_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate_video');
        } else {
            entry.target.classList.remove('animate_video');
        }
    });
}, {
    threshold: 0.5
});
map_observer.observe(map_elem);

const offre_elem = document.querySelector('#offre .center-img');
const offre_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate_video');
        } else {
            entry.target.classList.remove('animate_video');
        }
    });
}, {
    threshold: 0.5
});
offre_observer.observe(offre_elem);


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