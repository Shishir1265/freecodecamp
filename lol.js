const nav = document.querySelector('.nav-ul');
const click = document.querySelector('.menu-bar-button');
const navbutton = document.querySelector('.menu-bar-button');

navbutton.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
    }
    else {
        nav.setAttribute('data-visible', false)
    }
    const animatebutton = click.getAttribute('data-click');
    if (animatebutton === "false") {
        click.setAttribute('data-click', true);
    }
    else {
        click.setAttribute('data-click', false);
    }
})

