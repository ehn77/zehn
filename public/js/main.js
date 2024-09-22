const overlay = document.getElementById('overlay');
const image = document.getElementById('power');
const sidebar = document.getElementById('sidebar');
const xImg = document.getElementById('x');
const sidebar_init = document.getElementById("sidebar-init");
const circleImg = sidebar_init.querySelector('img');

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

circleImg.onclick = function() {
    circleImg.classList.add('disappear');
    sidebar.style.display = 'flex'; 
    setTimeout(() => {
        sidebar.classList.add('show'); 
    }, 0);
};


xImg.onclick = function() {
    sidebar.classList.remove('show');
    setTimeout(() => {
        circleImg.classList.remove('disappear');
        sidebar.style.display = 'none'; 
    }, 250); 
};


