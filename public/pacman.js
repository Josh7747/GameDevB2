document.addEventListener('keydown', movePacman);

var pacman = document.getElementById('pacman');
var left = 0;
var topPos = 0;

function movePacman(event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            left -= 40;
            break;
        case 38: // Up arrow
            topPos -= 40;
            break;
        case 39: // Right arrow
            left += 40;
            break;
        case 40: // Down arrow
            topPos += 40;
            break;
    }

    pacman.style.left = left + 'px';
    pacman.style.top = topPos + 'px';
}
