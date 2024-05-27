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
