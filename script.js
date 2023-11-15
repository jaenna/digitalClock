const $ = (selector) => {
    return document.querySelector(selector);
}

const time = $('#time');
const dateElement = $('#date');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        time.classList.add('invisible');
    } else {
        time.classList.remove('invisible');
    }

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    time.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = dateString;

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });
    week.children[now.getDay()].classList.add('active');
};

setInterval(update, 500);