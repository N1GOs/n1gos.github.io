// script.js

let notepadContent = '';
let currentLanguage = 'en';

function saveNotepad() {
    notepadContent = document.getElementById('notepad').value;
    alert('Content saved:\n\n' + notepadContent);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const languageSwitchBtn = document.getElementById('language-switch').querySelector('button');
    const sizeLabel = document.querySelector('label[for=size]');
    const colorLabel = document.querySelector('label[for=color]');
    const fontLabel = document.querySelector('label[for=font]');
    const saveBtn = document.getElementById('save-btn');

    if (currentLanguage === 'en') {
        languageSwitchBtn.textContent = 'Switch Language';
        sizeLabel.textContent = 'Size:';
        colorLabel.textContent = 'Color:';
        fontLabel.textContent = 'Font:';
        saveBtn.textContent = 'Save';
    } else {
        languageSwitchBtn.textContent = 'Сменить язык';
        sizeLabel.textContent = 'Размер:';
        colorLabel.textContent = 'Цвет:';
        fontLabel.textContent = 'Шрифт:';
        saveBtn.textContent = 'Сохранить';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('size').addEventListener('input', function () {
    document.getElementById('notepad').style.fontSize = this.value + 'px';
});

document.getElementById('color').addEventListener('input', function () {
    document.getElementById('notepad').style.color = this.value;
});

document.getElementById('font').addEventListener('change', function () {
    document.getElementById('notepad').style.fontFamily = this.value;
});

document.addEventListener('DOMContentLoaded', function () {
    updateLanguage();
});
