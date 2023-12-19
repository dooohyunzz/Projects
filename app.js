// const pointer = document.querySelector('.circle-pointer');


// window.addEventListener('mousemove', (e)=>{
//     let x = e.pageX - pointer.clientWidth / 2;
//     let y = e.pageY - pointer.clientHeight / 2;

//     pointer.style.left = `${x}px`;
//     pointer.style.top = `${y}px`;
// })

const contactBtn = document.querySelector('.contact-btn');
const contactContent = document.querySelector('.contact-content');

contactBtn.addEventListener('click', ()=>{
    contactContent.classList.toggle('active');
})