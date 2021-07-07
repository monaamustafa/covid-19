// dynamic padding top each section 
// window.addEventListener('load', function () {
//     let navbar = document.querySelector('header');
//     let content = document.querySelectorAll('.mainSection');

//     for (let k = 0; k < content.length; k++) {
//         content[k].style.paddingTop = navbar.clientHeight + "px";
//     }
// })
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
let navbar = document.querySelector('nav');
console.log(navbar);

window.addEventListener('scroll', function () {
    if (bodyScroll.scrollTop >= 40) {
        iconScroll.style.display = 'block';
        navbar.classList.add('nav-bg');
    } else {
        iconScroll.style.display = 'none';
        navbar.classList.remove('nav-bg');
    }
})
// dynamic scroll
let listItemII = document.querySelectorAll('nav ul li');
let sectionItems = document.querySelectorAll('.navbarItem');
console.log(listItemII.length + "" + sectionItems.length)
for (let i = 0; i < listItemII.length; i++) {
    listItemII[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            // block: 'center'
        });
    });
}
// show more details




