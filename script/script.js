document.querySelector('.hamburguer').addEventListener('click', change);

let spans = document.querySelectorAll('.hamburguer span')
let nav = document.querySelector('nav')
let whatsApp = document.querySelector('.whatsapp')

function change() {


    if (getComputedStyle(nav).display === 'none') {
        nav.style.display = 'flex';
        whatsApp.style.display = 'none';
        spans.forEach((value) => {
            value.style.backgroundColor = '#9a7c07';
        });

    }
    else {
        nav.style.display = 'none';
        whatsApp.style.display = 'block'
        spans.forEach((value) => {
            value.style.backgroundColor = '';
        });
    }


}

document.querySelector('.heroArea').addEventListener('click', screen)

function screen() {
    if (window.innerWidth <= 992) {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
            whatsApp.style.display = 'block';
            spans.forEach(span => {
                span.style.backgroundColor = '';
            });
        }
    }
}

