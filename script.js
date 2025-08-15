const images = [
    "Photos/photo1.jpg",
    "Photos/photo2.jpg",
    "Photos/photo3.jpg",
    "Photos/photo4.jpg",
    "Photos/photo5.jpg",
    "Photos/photo6.jpg",
    "Photos/photo7.jpg",
    "Photos/photo8.jpg",
    "Photos/photo9.jpg",
    "Photos/photo10.jpg",
    "Photos/photo11.jpg",
    "Photos/photo12.jpg",
    "Photos/photo13.jpg",
    "Photos/photo14.jpg",
    "Photos/photo15.jpg",
    "Photos/photo16.jpg",
    "Photos/photo17.jpg"
];
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    updateImage();

    const thumbs = document.getElementById("thumbnails");
    thumbs.innerHTML = "";
    images.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.toggle("active", i === currentIndex);
        img.onclick = () => { currentIndex = i; updateImage(); };
        thumbs.appendChild(img);
    });
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    updateImage();
}

function updateImage() {
    document.getElementById("mainImage").src = images[currentIndex];
    const thumbs = document.querySelectorAll("#thumbnails img");
    thumbs.forEach((img, i) => {
        img.classList.toggle("active", i === currentIndex);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('requestModal');
    if (!modal) return;

    const openers = document.querySelectorAll('[data-open="requestModal"]');
    const closers = modal.querySelectorAll('[data-close]');
    const dialog  = modal.querySelector('.modal__dialog');
    const form    = modal.querySelector('.modal__form');

    function openModal() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.documentElement.style.overflow = 'hidden';
        const firstInput = modal.querySelector('input, textarea, button');
        if (firstInput) firstInput.focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
    }

    openers.forEach(btn => btn.addEventListener('click', openModal));
    closers.forEach(el => el.addEventListener('click', closeModal));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // клик по фону закрывает, по диалогу — нет
    modal.addEventListener('click', e => {
        if (!dialog.contains(e.target)) closeModal();
    });

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            closeModal();
            alert('Հայտը ուղարկվեց։');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.getElementById('closePopup');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.style.display = 'none';
    });
});

(function(){
    const flags = document.querySelector('.flags');
    const body  = document.body;
    if(flags){
        flags.addEventListener('click', (e)=>{
            body.classList.toggle('menu-open');
        });
    }

    document.querySelectorAll('nav a').forEach(a=>{
        a.addEventListener('click', ()=> body.classList.remove('menu-open'));
    });
})();
(function(){
    const mq = window.matchMedia('(max-width: 768px)');
    const hero = document.querySelector('.hero');
    const right = hero?.querySelector('.hero-right');
    if(hero && right && mq.matches){

        if(!document.querySelector('.hero-right--full')){
            const full = right.cloneNode(true);
            full.classList.add('hero-right--full');
            hero.after(full);
        }
    }
})();
