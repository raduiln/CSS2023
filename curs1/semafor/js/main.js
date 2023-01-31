let lights = document.querySelectorAll('#isiqfor>div');
let timers = [500, 2000, 7000];
let counter = 0;
let light2 = document.querySelectorAll('#isiqfor2 > div');
let timer2 = [500, 2000, 7000];
let counter2 = 2;

window.addEventListener('load', start);

let start = setTimeout(function(){
    traffic();
    traffic2();
}, 5000);
function traffic() {
    for (i=0; i<lights.length; i++) {
        light[i].classList.remove('on');
    }
        setTimeout(traffic, timers[counter]);
        counter = (counter + 1) % timers.length;
    }
    function traffic2() {
        for (i=0; i<lights.length; i++) {
            light[i].classList.remove('on');
        }

            setTimeout(traffic, timers[counter]);
            counter = (counter + 1) % timers.length;
        }

