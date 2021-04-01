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