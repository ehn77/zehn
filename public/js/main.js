const overlay = document.getElementById('overlay');
const image = document.getElementById('power');

image.onload = function() {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('show');
        image.classList.add('visible');
    }, 10);
};

if (image.complete) {
    image.onload();
} else {
    overlay.style.display = 'none';
}

image.onclick = function() {

    image.classList.add('rotate');
    
    image.classList.remove('visible');
    setTimeout(() => {
        image.classList.remove('rotate');
        image.style.display = 'none';

        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }, 500);
};
