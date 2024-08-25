
function processText(action) {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.querySelector('.right-section p');
    let result;

    const normalizedText = inputText.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (action === 'encrypt') {
        result = normalizedText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    } else if (action === 'decrypt') {
        result = normalizedText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    resultElement.textContent = result;
}
