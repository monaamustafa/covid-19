
// dynamic padding top each section 
// window.addEventListener('load', function () {
//     let navbar = document.querySelector('header');
//     let content = document.querySelectorAll('.mainSection');

//     for (let k = 0; k < content.length; k++) {
//         content[k].style.paddingTop = navbar.clientHeight + "px";
//     }
// })
// show and hide second menu

let openIcon=document.querySelector('.menu-icon');
let closeIcon=document.querySelector('.clase-menu');
let secondNav=document.querySelector('.second-nav');
openIcon.addEventListener('click',function(){
secondNav.style.display='block'
})
closeIcon.addEventListener('click',function(){
    secondNav.style.display='none';
    })
secondNav.addEventListener('click',function(){
    secondNav.style.display='none';
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
let navbar = document.querySelector('nav');
// console.log(navbar);
window.addEventListener('scroll', function () {
    if (bodyScroll.scrollTop >= 40) {
        iconScroll.style.display = 'block';
        navbar.classList.add('nav-bg');
    } else {
        iconScroll.style.display = 'none';
        navbar.classList.remove('nav-bg');
    }
})
// scroll to top 
iconScroll.addEventListener('click', function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
// dynamic scroll
let listItemI = document.querySelectorAll('nav ul.first-nav li');
let listItemII = document.querySelectorAll('nav ul.diff-style li');
let sectionItems = document.querySelectorAll('.navbarItem');
console.log(listItemII.length + "" + sectionItems.length)
for (let i = 0; i < listItemII.length; i++) {
    listItemII[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            // block: 'center'
        });
    });
    listItemI[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            // block: 'center'
        });
    });

}
// show more details
// commen question section
 let mainQuestion = document.querySelectorAll('.main-question');
let mainQuestionAnswer = document.querySelectorAll('.main-question-answer');
// change plus to minus
// let showIcon=document.querySelectorAll('.show-icon');
let showIcon=document.querySelectorAll('.show-icon');
let hideIcon=document.querySelectorAll('.hide-icon');

for (var i = 0; i < mainQuestion.length; i++) {
    console.log(mainQuestion[i]);
    console.log(mainQuestionAnswer[i]);
    // console.log(changIcon[i]);
}
for ( let i = 0; i < mainQuestion.length; i++) {
    mainQuestion[i].addEventListener('click', function () {
        if (mainQuestionAnswer[i].classList.contains('hide-answer')){
            mainQuestionAnswer[i].classList.add('show-answer');
            mainQuestionAnswer[i].classList.remove('hide-answer');
            mainQuestion[i].classList.remove('minimized');
            mainQuestion[i].classList.add('active');
        } 
        else {
            mainQuestionAnswer[i].classList.remove('show-answer');
            mainQuestionAnswer[i].classList.add('hide-answer');
            mainQuestion[i].classList.add('minimized');
            mainQuestion[i].classList.remove('active');
            showIcon[i].classList.add('fa-plus');
            showIcon[i].classList.remove('fa-minus');
            console.log(showIcon[i]);

        }
    });
}

// show main questions :>

let headerTopic  = document.querySelectorAll('.question .details');
let topicDetails = document.querySelectorAll('.answers');
for (let i = 0; i < headerTopic.length; i++) {
    headerTopic[i].addEventListener('click', function () {
        for(let k = 0; k < headerTopic.length; k++){
            topicDetails[k].classList.add('header-active');
        }
topicDetails[i].classList.remove('header-active');
    });
}