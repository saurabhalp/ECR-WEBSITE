document.getElementById('englishBtn').addEventListener('click', () => {
    switchLanguage('en');
});

document.getElementById('hindiBtn').addEventListener('click', () => {
    switchLanguage('hi');
});

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-en]');
    elements.forEach(element => {
        if (language === 'en') {
            element.textContent = element.getAttribute('data-lang-en');
        } else if (language === 'hi') {
            element.textContent = element.getAttribute('data-lang-hi');
        }
    });
}
