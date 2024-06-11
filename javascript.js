// Skills - Skill Bars
document.addEventListener('DOMContentLoaded', function() {
    let skillSection = document.querySelector('#skills');
    let boxes = document.querySelectorAll('.box');

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                load_bars();
                startRotation();
            } else {
                reset_bars();
            }
        });
    }

    let options = {
        root: null,  
        rootMargin: '0px',
        threshold: 0.5  
    };

    let observer = new IntersectionObserver(onIntersection, options);
    observer.observe(skillSection);

    function load_bars() {
        boxes.forEach(box => {
            let line = box.querySelector('.line');
            let increasing_percentage = box.querySelector('.increasing_percentage');
            let total_percentage = box.querySelector('.total_percentage').innerHTML;
            
            let p = 0;
            let my_interval = setInterval(() => {
                p++;
                line.style.width = p + '%';
                increasing_percentage.innerHTML = p + '%';
                if (p == parseInt(total_percentage)) {
                    clearInterval(my_interval);
                }
            }, 25);
        });
    }

    function reset_bars() {
        boxes.forEach(box => {
            let line = box.querySelector('.line');
            let increasing_percentage = box.querySelector('.increasing_percentage');
            
            line.style.width = '0%';
            increasing_percentage.innerHTML = '0%';
        });
    }

    // Text & Image Rotation
    function rotateImageAndText(box) {
        let image = box.querySelector('.skills_image');
        let text = box.querySelector('h2');
        let isVisible = false;

        setInterval(() => {
            if (isVisible) {
                if (image) image.style.display = 'block'; 
                if (text) text.style.display = 'none'; 
            } 
            else {
                if (text) text.style.display = 'block';
                if (image) image.style.display = 'none';
            }
            isVisible = !isVisible;
        }, 5000);
    }

    function startRotation() {
        boxes.forEach(box => {
            rotateImageAndText(box);
        });
    }
});

// Sticky NavList
window.addEventListener('scroll', function() {
    let navList = document.querySelector('header');
    let navHeight = navList.offsetHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= navHeight) {
        navList.classList.add('sticky');
    } else {
        navList.classList.remove('sticky');
    }
});

// Light & Dark Mode
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentMode = root.getAttribute('data-mode');

    if (currentMode === 'purple') {
        root.style.setProperty('--faccent-colour', 'var(--saccent-colour)');
        root.style.setProperty('--faccent-colour-light', 'var(--saccent-colour-light)');
        root.style.setProperty('--fbg-colour', 'var(--sbg-colour)');
        root.style.setProperty('--fsecond-bg-colour', 'var(--ssecond-bg-colour)');
        root.setAttribute('data-mode', 'blue');
    } else {
        root.style.setProperty('--faccent-colour', '#670e77');
        root.style.setProperty('--faccent-colour-light', '#d774e9');
        root.style.setProperty('--fbg-colour', '#ACB7DF');
        root.style.setProperty('--fsecond-bg-colour', '#68749D');
        root.setAttribute('data-mode', 'purple');
    }
});

// Scroll to Top
function scrollToTop() 
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Projects - Gallery Arrows
function scrollLeft(button) {
    const gallery = button.parentElement.querySelector('.gallery');
    gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' });
}

function scrollRight(button) {
    const gallery = button.parentElement.querySelector('.gallery');
    gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });
}

// Projects - Active grid_item display
document.addEventListener('DOMContentLoaded', function() {
    let gridItems = document.querySelectorAll('.grid_item');
    let currentIndex = 0;

    function highlightNextItem() {
        gridItems.forEach(item => item.classList.remove('in-view'));

        gridItems[currentIndex].classList.add('in-view');

        currentIndex = (currentIndex + 1) % gridItems.length;
    }

    highlightNextItem();

    setInterval(highlightNextItem, 3000);
});


















