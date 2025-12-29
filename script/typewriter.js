/**
 * 
 */
// js/typewriter.js

// Le texte complet à afficher lettre par lettre



const textToType = " Having completed my four-year course at ENSPY, I am now honored to attend ENSEEIHT, an elite engineering school based in Toulouse. Fueled by a deep-seated interest in sustainable development and technical rigor, I am specializing in Fluid Mechanics, Energy and Environment (MFEE), aspiring to establish a career in this essential domain."
// L'élément HTML où le texte sera affiché
const textElement = document.getElementById('typewriter-text');

// Vitesse de frappe en millisecondes (plus la valeur est faible, plus c'est rapide)
const typingSpeed = 75; 

let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    // Ajouter la prochaine lettre
    textElement.innerHTML += textToType.charAt(charIndex);
    charIndex++;

    // Appeler la fonction à nouveau après un délai
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Optionnel : ajouter le reste du texte si vous l'avez retiré du HTML
    textElement.innerHTML = textToType; 
  }
}

// Lancer l'animation une fois que la page est chargée
window.onload = function() {
    typeWriter();
};