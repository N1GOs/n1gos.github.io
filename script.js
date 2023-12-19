let notepadContent = '';
let currentLanguage = 'en';

function saveNotepad() {
    notepadContent = document.getElementById('notepad').value;
    // You can save notepadContent to the cloud or perform other actions here
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
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
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
    // Set initial dark mode state
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkModeEnabled);

    // Update language based on user's preference
    updateLanguage();
});
