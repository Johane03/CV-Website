// Skill bars
document.addEventListener('DOMContentLoaded', function() {
    let skillSection = document.querySelector('#skills');
    let boxes = document.querySelectorAll('.box');

    // Callback function to execute when the observer detects intersection
    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                load_bars();
            } else {
                reset_bars();
            }
        });
    }

    // Options for the observer (we can set a root, margin, and threshold)
    let options = {
        root: null,  // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5  // Trigger when 50% of the section is visible
    };

    // Create an intersection observer
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
        root.style.setProperty('--faccent-colour', '#301934');
        root.style.setProperty('--faccent-colour-light', '#7a3f85');
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
