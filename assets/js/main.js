function fadein(elem) {
    elem.classList.replace('faded','fadein');
    }
function typeWriter(elementId, text, speed, i = 0) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(elementId, text, speed, i);
        }, speed);
    }
}

function toggleVisibility() {
var dropElement = document.getElementById('side-bar-mobile');
var isChecked = document.getElementById('toggle-menu').checked;
var screenWidth = window.innerWidth;

if (isChecked && screenWidth <= 700) {
    dropElement.style.display = 'flex';
    requestAnimationFrame(() => {
    dropElement.style.top = '0';
    });
} else {
    dropElement.style.top = '-100%';
    setTimeout(() => {
    dropElement.style.display = 'none';
    }, 500);
}
}

var date = new Date;
document.getElementById('date').innerHTML = "&copy; " + date.getFullYear() + " - Polyana Silva";
document.getElementById('toggle-menu').addEventListener('change', toggleVisibility);
window.addEventListener('resize', toggleVisibility); 