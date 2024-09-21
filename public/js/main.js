const overlay = document.getElementById('overlay');
const image = document.getElementById('power');

image.onload = function() {
    overlay.style.display = 'flex';
};

if (image.complete) {
    image.onload();
} else {
    overlay.style.display = 'none';
}

