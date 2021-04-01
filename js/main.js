/****************************************************************
 * STATS COUNTER
 ****************************************************************/

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

/****************************************************************
 * SCROLL ANIMATION
 ****************************************************************/

// select all streaming cards
const streamCards = document.querySelectorAll('.stream__card');

// create a function checkCards
const checkCards = () => {
    // create a variable which trigger depending on the position of the screen. in this case is 75% of vh
    const triggerBottom = window.innerHeight * 0.75;

    // Loopt trough all the cards
    streamCards.forEach(card => {
        // Locate the top position of the card
        const cardTop = card.getBoundingClientRect().top;

        // if the top of the card is less than the vh position, add the class to the card
        cardTop < triggerBottom ? card.classList.add('show') : null;
    });
};

// event listener on scroll
window.addEventListener('scroll', checkCards);

/****************************************************************
 * LOCAL TIME
 ****************************************************************/

// select spans to add information later on
let starting = document.querySelectorAll('.starting');
let ending = document.querySelectorAll('.ending');
// let endingwarhammer = document.querySelector('.endingWarhammer');

// create the date with UTC as base
const startTime = new Date(Date.UTC(2020, 1, 1, 19, 0));
const endTime = new Date(Date.UTC(2020, 1, 1, 23, 0));
// const endTimeWarhammer = new Date(Date.UTC(2020, 1, 1, 22, 0));

// Cronstructor to modify how time will be display
let dtFormat = new Intl.DateTimeFormat([], {
    hourCycle: 'h23', // 23 hour finish the day on 00.00 instead of 24.00
    hour: 'numeric',
    minute: 'numeric'
});

//Loop all starting time and add startTime
starting.forEach( (item) => {
    item.innerHTML = dtFormat.format(startTime);
});

// Loop all ending time and add endTime
ending.forEach ((item) => {
    item.innerHTML = dtFormat.format(endTime);
});


// Special for warhammer ending time
// endingwarhammer.innerHTML = dtFormat.format(endTimeWarhammer);

