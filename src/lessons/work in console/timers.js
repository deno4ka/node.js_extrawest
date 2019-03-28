let timeout = setTimeout(function () {
    console.log('timeout example');
}, 2000);

let counter = 0;
let interval = setInterval(function () {
    console.log('interval', counter++);
    if (counter === 10) {
        clearInterval(interval);
    }
}, 100);

