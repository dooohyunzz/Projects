const ChatContanier = document.querySelector('.ChatMassge');
const chatMassages = document.querySelector('.Chat-massages');
const Massages = ['안녕하세요!', '저의 포트폴리오에 방문해주셔서 감사합니다', '무엇을 도와드릴까요?!'];
const Massages2 = ['저는 웹 개발에 전념 중인 "김동현"입니다.', '인터랙티브한 웹 경험을 선사하며', '새로운 기술 아이디어를 추구합니다.', '현대적이고 효율적인 웹 개발을 통해', '사용자들에게 최고의 경험을 제공하는 것이 목표입니다!']
const Massages3 = ['안녕하세요!! ']
const Massages4 = ['관심을 가져주셔서 감사합니다!','이메일@주소.com','언제나 연락을 기다리고 있습니다 :)'];
const Massages5 = ['아쉽네요','그렇지만 언제든 관심있으실 때','다시 들러주세요! :)']
const ZoomIn = document.querySelector('.Zoom-in');
const ZoomOut = document.querySelector('.Zoom-out');

const buttons = ['당신은 누구인가요?', '프로젝트 경험'];
const buttons2 = ['연락하고 싶어요!', '다음에 뵙죠'];



const buttonDiv = document.createElement('div');
const buttonDiv2 = document.createElement('div');
let MassageIndex = 0;
let buttonIndex = 0;
let intervalId;
let currentMassages = 1;

ZoomIn.addEventListener('click', ChatZoomIn)
ZoomOut.addEventListener('click', ChatZoomOut)

function ChatZoomIn(){
    ChatContanier.classList.add('active');
}

function ChatZoomOut(){
    ChatContanier.classList.remove('active');
}



window.addEventListener('DOMContentLoaded', massagesType);

function scrollToBottom() {
    chatMassages.scrollTop = chatMassages.scrollHeight;
}

function massagesType() {
    if (MassageIndex < Massages.length) {
        const span = document.createElement('span');
        span.textContent = Massages[MassageIndex];
        chatMassages.appendChild(span);
        MassageIndex++;
        scrollToBottom();
        setTimeout(massagesType, 1500);
    } else if (MassageIndex >= Massages.length && buttonIndex < buttons.length) {
        const button = document.createElement('button');
        button.textContent = buttons[buttonIndex];
        buttonDiv.appendChild(button);
        chatMassages.appendChild(buttonDiv);
        buttonIndex++;
        scrollToBottom();
        setTimeout(massagesType);
    } else {
        const allButtons = document.querySelectorAll('.Chat-massages button');
        allButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                if(btn.textContent === buttons[0] && currentMassages === 1){
                    MassageIndex = 0;
                    buttonIndex = 0;
                    massagesType1();
                } else {
                    return;
                }
            });
        });
    }
}

function massagesType1(){
    currentMassages = 2;
    if (MassageIndex < Massages2.length) {
        const span = document.createElement('span');
        span.textContent = Massages2[MassageIndex];
        chatMassages.appendChild(span);
        scrollToBottom();
        MassageIndex++;
        setTimeout(massagesType1, 2000);
    } else if (MassageIndex >= Massages2.length && buttonIndex < buttons2.length) {
        const button = document.createElement('button');
        button.textContent = buttons2[buttonIndex];
        buttonDiv2.appendChild(button);
        chatMassages.appendChild(buttonDiv2);
        buttonIndex++;
        scrollToBottom();
        setTimeout(massagesType1);
    } else {
        const allButtons = document.querySelectorAll('.Chat-massages button');
        allButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                if(btn.textContent === buttons2[0] && currentMassages === 2){
                    MassageIndex = 0;
                    buttonIndex = 0;
                    massagesType3();
                } else if(btn.textContent === buttons2[1] && currentMassages === 2) {
                    MassageIndex = 0;
                    buttonIndex = 0;
                    massagesType4();
                } else {
                    return;
                }
            });
        });
    }
}

function massagesType2(){
    console.log('두번째');
}


function massagesType3(){
    currentMassages = 4;
    if (MassageIndex < Massages4.length) {
        const span = document.createElement('span');
        span.textContent = Massages4[MassageIndex];
        chatMassages.appendChild(span);
        scrollToBottom();
        MassageIndex++;
        setTimeout(massagesType3, 2000);
    } else {
        return;
    }
}

function massagesType4(){
    currentMassages = 5;
    if (MassageIndex < Massages5.length) {
        const span = document.createElement('span');
        span.textContent = Massages5[MassageIndex];
        chatMassages.appendChild(span);
        scrollToBottom();
        MassageIndex++;
        setTimeout(massagesType4, 2000);
    } else {
        return;
    }
}