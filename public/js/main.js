const overlay = document.getElementById('overlay');
const image = document.getElementById('power');

image.onload = function() {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('show');
        image.classList.add('visible'); // Make the image visible
    }, 10);
};

if (image.complete) {
    image.onload();
} else {
    overlay.style.display = 'none';
}

image.onclick = function() {
    image.classList.remove('visible'); // Start fading the image out
    setTimeout(() => {
        image.style.display = 'none'; // Hide the image after it fades out

        // After the image has faded out, fade the overlay
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.style.display = 'none'; // Finally hide the overlay
        }, 500); // Overlay fades out after 500ms (matching its CSS transition)
    }, 500); // Wait for image to finish fading out (matching its CSS transition)
};
