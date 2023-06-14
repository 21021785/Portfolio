var cursorContainer = document.querySelector('.cursor-container');
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

cursorContainer.style.transform = 'translateX(-9999px)';

document.addEventListener('mousemove', function (e) {
    cursorContainer.style.transform = 'none';
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})



toggleCursorVisibility();

// Check screen width on window resize
window.addEventListener('resize', toggleCursorVisibility);

function toggleCursorVisibility() {
  if (window.innerWidth < 768) {
    cursorContainer.style.display = 'none';
  } else {
    cursorContainer.style.display = 'block';
  }
}