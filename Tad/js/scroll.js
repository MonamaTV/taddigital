const sections = document.querySelectorAll('.section');
const viewHeight = window.innerHeight;
console.log(sections);
const revealSection = () => {
    sections.forEach(section => {
        const distanceFromTop = section.getBoundingClientRect().top;
        distanceFromTop < viewHeight - 100 ? section.classList.add('.scroll-reveal') :
            section.classList.remove('.scroll-reveal');
    });
}

const sendMessageButton = document.querySelector('.message-input button');

const name = document.querySelector("input[type='text'");
const email = document.querySelector("input[type='email'");
const message = document.querySelector("textarea");

sendMessageButton.addEventListener('click', sendMessage);
const sendMessage = () => {
    console.log(this);


}
window.addEventListener('load', revealSection);
window.addEventListener('scroll', revealSection);