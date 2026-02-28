// ==================== BASE64 ====================
function base64Encode() {
    const input = document.getElementById('base64-input').value;
    try {
        const result = btoa(unescape(encodeURIComponent(input)));
        document.getElementById('base64-result').textContent = result;
    } catch (e) {
        document.getElementById('base64-result').textContent = 'ОШИБКА: Невозможно закодировать';
    }
}

function base64Decode() {
    const input = document.getElementById('base64-input').value;
    try {
        const result = decodeURIComponent(escape(atob(input)));
        document.getElementById('base64-result').textContent = result;
    } catch (e) {
        document.getElementById('base64-result').textContent = 'ОШИБКА: Невалидный Base64';
    }
}
