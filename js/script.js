'use strict'
function runTypingEffect() {
    const text = 'I am Mustafa Ali.';
    const typingEl = document.getElementById('typing-text');
    const typingDelay = 150;

    typeText(text, typingEl, typingDelay);
};

function typeText(text, typingEl, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingEl.textContent += text.charAt(i);
        }, typingDelay * i);
    };
};

document.addEventListener('DOMContentLoaded', runTypingEffect);

///////////////////////////////////////
function runTypingEffectReversed() {
    const text = 'WEB DEVELOPER';
    const typingEl = document.getElementById('job');
    const typingDelay = 200;

    typeTextReversed(text, typingEl, typingDelay);
};

function typeTextReversed(text, typingEl, typingDelay) {
    for (let i = text.length - 1; i >= 0; i--) {
        setTimeout(() => {
            typingEl.textContent = text.charAt(i) + typingEl.textContent;
        }, typingDelay * (text.length - 1 - i));
    };
};


document.addEventListener('DOMContentLoaded', runTypingEffectReversed);

/////////////////////////////

function runTypingEffectAgain() {
    const text = 'FREELANCER';
    const typingEl = document.getElementById('title');
    const typingDelay = 250;

    typeText(text, typingEl, typingDelay);

}

document.addEventListener('DOMContentLoaded', runTypingEffectAgain);

//////////////////////////////
//Bootstrap Alert:

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper);

    //remove alert after 2 seconds:
    setTimeout(() => {
        wrapper.innerHTML = ''
    }, 2000);
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Holy guacamole! Wrong Password!', 'warning')
    })
};

