// ==================== PASSWORD GENERATOR ====================
const chars = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function updateLengthDisplay() {
    document.getElementById('length-value').textContent = document.getElementById('password-length').value;
}

function calculateStrength(password) {
    let score = 0;
    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    return 'strong';
}

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const useUpper = document.getElementById('use-upper').checked;
    const useLower = document.getElementById('use-lower').checked;
    const useNumbers = document.getElementById('use-numbers').checked;
    const useSymbols = document.getElementById('use-symbols').checked;

    let charset = '';
    if (useUpper) charset += chars.uppercase;
    if (useLower) charset += chars.lowercase;
    if (useNumbers) charset += chars.numbers;
    if (useSymbols) charset += chars.symbols;
    
    if (charset === '') {
        showToast('Выберите хотя бы один тип символов!');
        return;
    }
    
    let password = '';
    
    // Ensure at least one of each selected type
    if (useUpper) password += chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)];
    if (useLower) password += chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)];
    if (useNumbers) password += chars.numbers[Math.floor(Math.random() * chars.numbers.length)];
    if (useSymbols) password += chars.symbols[Math.floor(Math.random() * chars.symbols.length)];
    
    // Fill the rest
    for (let i = password.length; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }
    
    // Shuffle
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    document.getElementById('password-output').value = password;
    
    const strength = calculateStrength(password);
    const fill = document.getElementById('strength-fill');
    const text = document.getElementById('strength-text');
    
    fill.className = 'strength-fill ' + strength;
    
    const labels = {
        weak: 'СЛАБЫЙ',
        medium: 'СРЕДНИЙ',
        strong: 'СИЛЬНЫЙ'
    };
    text.textContent = labels[strength];
    text.style.color = strength === 'weak' ? '#ff0040' : 
                       strength === 'medium' ? '#ffaa00' : '#00ff88';
}

function copyPassword() {
    const pass = document.getElementById('password-output').value;
    if (pass && pass !== 'Нажмите Generate') {
        navigator.clipboard.writeText(pass).then(() => {
            showToast('ПАРОЛЬ СКОПИРОВАН!');
        });
    }
}
