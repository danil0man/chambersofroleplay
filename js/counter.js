const counters = document.querySelectorAll('.stats-box__counter');
let hasRun = true;

const test = function() {
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 500;

            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
};



document.addEventListener('scroll', () => {

    if (window.scrollY > 1160) {
        if (hasRun) {
            test();
            hasRun = false;
        }
        hasRun = false;
    }

}

);
