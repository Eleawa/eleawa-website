const text = "Hello, World!";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80); // speed (lower = faster)
    }
}

typeEffect();