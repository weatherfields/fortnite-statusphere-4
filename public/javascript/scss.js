// Select Dom Items
const iconBtn = document.querySelector('.icon-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// set Initial State Of Menu

let showMenu = false;
iconBtn.addEventListener('click', toggleBtn);

// open/close the menu
function toggleBtn() {
    if (!showMenu) {
        iconBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        // menuBranding.classList.toggle('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = !showMenu;
        showMenu = true;
    } else {
        iconBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }

}

function getInfo() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log(username, password);
}