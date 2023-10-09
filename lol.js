const nav = document.querySelector('.nav-ul');

const navbutton = document.querySelector('.menu-bar-button');

navbutton.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    console.log('click');
    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
    }
    else {
        nav.setAttribute('data-visible', false)
    }
})