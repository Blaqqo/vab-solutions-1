const hamburgerButton = document.getElementById('hamburger-btn');

const toggleHamburgerMenu = () => {
    const barsIcon = document.getElementsByClassName('fa-bars')[0];
    const closeIcon = document.getElementsByClassName('fa-xmark')[0];

    const hamburgerMenu = document.getElementById('hamburger-menu');

    barsIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');

    hamburgerMenu.classList.toggle('hide-menu');
}

hamburgerButton.addEventListener('click', toggleHamburgerMenu);