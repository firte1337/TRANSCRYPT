// ==================== INVISIBLE CHARACTER ====================
const invisibleChar = '\u3164';

function copyInvisibleChar() {
    navigator.clipboard.writeText(invisibleChar).then(() => {
        showToast('НЕВИДИМЫЙ СИМВОЛ СКОПИРОВАН!');
    });
}

function previewInvisibleChar() {
    const preview = document.getElementById('invisible-preview');
    if (preview) {
        preview.textContent = '[' + invisibleChar + invisibleChar + invisibleChar + invisibleChar + invisibleChar + ']';
    }
}
