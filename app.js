document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.text-input');
    const encryptButton = document.querySelector('.encrypt');
    const decryptButton = document.querySelector('.decrypt');
    const outputDiv = document.querySelector('.output');
    const image = document.querySelector('.output-image'); // Selecciona la imagen

    encryptButton.addEventListener('click', function() {
        const inputText = textarea.value.trim().toLowerCase();
        const encryptedText = encryptText(inputText);
        displayResult(encryptedText);
    });

    decryptButton.addEventListener('click', function() {
        const inputText = textarea.value.trim().toLowerCase();
        const decryptedText = decryptText(inputText);
        displayResult(decryptedText);
    });

    function encryptText(text) {
        let encrypted = text.replace(/e/g, 'enter');
        encrypted = encrypted.replace(/i/g, 'imes');
        encrypted = encrypted.replace(/a/g, 'ai');
        encrypted = encrypted.replace(/o/g, 'ober');
        encrypted = encrypted.replace(/u/g, 'ufat');
        return encrypted;
    }

    function decryptText(text) {
        let decrypted = text.replace(/ufat/g, 'u');
        decrypted = decrypted.replace(/ober/g, 'o');
        decrypted = decrypted.replace(/ai/g, 'a');
        decrypted = decrypted.replace(/imes/g, 'i');
        decrypted = decrypted.replace(/enter/g, 'e');
        return decrypted;
    }

    function displayResult(result) {
        outputDiv.innerHTML = `<p>${result}</p>`;
        image.classList.add('hidden'); // Ocultar la imagen
    }
});


