// dynamic padding top each section 
window.addEventListener('load', function () {
    let navbar = document.querySelector('ul');
    let content = document.querySelectorAll('.box');

    for (let k = 0; k < content.length; k++) {
        content[k].style.paddingTop = navbar.clientHeight + "px";
    }

    // console.log(navbar.clientHeight);
})
//             Add Active Class  
let link = document.querySelectorAll('ul li a');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        for (let j = 0; j < link.length; j++) {
            link[j].classList.remove('active');
        }
        link[i].classList.add('active');
    });
}
//Scroll-top
let bodyScroll = document.querySelector('html, body');
let iconScroll = document.querySelector('.scroll-top');
let navbar = document.querySelector('.navbar-nav');

window.addEventListener('scroll', function () {
    if (bodyScroll.scrollTop >= 60) {
        iconScroll.style.display = 'block';
        navbar.classList.add('navbar-background');
    } else {
        iconScroll.style.display = 'none';
        navbar.classList.remove('navbar-background');
    }
})
// dynamic scroll
let listItem = document.querySelectorAll('.menu li');
let listItemII = document.querySelectorAll('.navbar ul li');
let sectionItems = document.querySelectorAll('.box');
console.log(listItemII.length + "" + sectionItems.length)
for (let i = 0; i < listItemII.length; i++) {
    listItemII[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        listItemII[i].classList.add('active');
    });
}