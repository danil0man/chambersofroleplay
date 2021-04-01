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