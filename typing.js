// Teks yang ingin ditampilkan
const greetingText = "Hello Masha!";
const messageText = "I'm still Here\nyou're beautifull girl in the world!!!";

// Selector element
const greetingElement = document.getElementById("greeting");
const messageElement = document.getElementById("message");

// Animasi pengetikan
function typeText(element, text, delay) {
  let charIndex = 0;
  const textLength = text.length;
  element.style.opacity = 1;

  function type() {
    if (charIndex < textLength) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, delay);
    }
  }

  type();
}

// Animasi pengetikan untuk pesan salam
typeText(greetingElement, greetingText, 100);

// Menambahkan delay sebelum menampilkan pesan
setTimeout(function () {
  // Animasi pengetikan untuk pesan
  typeText(messageElement, messageText, 50);
}, greetingText.length * 100); // Menunggu hingga selesai mengetik salam
