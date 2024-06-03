// document.getElementById('englishBtn').addEventListener('click', () => {
//     switchLanguage('en');
// });

// document.getElementById('hindiBtn').addEventListener('click', () => {
//     switchLanguage('hi');
// });

// function switchLanguage(language) {
//     const elements = document.querySelectorAll('[data-lang-en]');
//     elements.forEach(element => {
//         if (language === 'en') {
//             element.textContent = element.getAttribute('data-lang-en');
//         } else if (language === 'hi') {
//             element.textContent = element.getAttribute('data-lang-hi');
//         }
//     });
// }

let currentLang = 'en';

const langMap = {
    'en': {
        'East Central Railway': 'East Central Railway',
        '"I PLEDGE FOR SWITCHING-OFF THE LIGHTS & FANS WHILE LEAVING WORK PLACE OR RES"': '"I PLEDGE FOR SWITCHING-OFF THE LIGHTS & FANS WHILE LEAVING WORK PLACE OR RES"',
        'Dashboard': 'Dashboard',
        'Rly. Board': 'Rly. Board',
        'Shared Folder': 'Shared Folder',
        'IRPSM': 'IRPSM',
        'IREPS': 'IREPS',
        'REIS': 'REIS',
        'News': 'News',
        'ANOMS': 'ANOMS',
        'Press Brief': 'Press Brief',
        'E Dak': 'E Dak',
        'Contact': 'Contact',
        'E-Mail': 'E-Mail',
        'Schedule of Power': 'Schedule of Power',
        'SEROA': 'SEROA',
        'SERPOA': 'SERPOA',
        'Safar-A Journey': 'Safar-A Journey',
        'FOIS': 'FOIS',
        'IPAS': 'IPAS',
        'ICMS': 'ICMS',
        'System Map': 'System Map',
        'Codes & Man': 'Codes & Man',
        'GST': 'GST',
    },
    'hi': {
        'East Central Railway': 'पूर्वी रेलवे',
        '"I PLEDGE FOR SWITCHING-OFF THE LIGHTS & FANS WHILE LEAVING WORK PLACE OR RES"': 'मैं कार्य स्थल या आवास छोड़ते समय लाइट और पंखे बंद करने की शपथ लेता हूँ',
        'Dashboard': 'डैशबोर्ड',
        'Rly. Board': 'रेलवे बोर्ड',
        'Shared Folder': 'साझा फ़ोल्डर',
        'IRPSM': 'आईआरपीएसएम',
        'IREPS': 'आईआरईपीएस',
        'REIS': 'आरईआईएस',
        'News': 'समाचार',
        'ANOMS': 'एएनओएमएस',
        'Press Brief': 'प्रेस ब्रीफ',
        'E Dak': 'ई डाक',
        'Contact': 'संपर्क करें',
        'E-Mail': 'ई-मेल',
        'Schedule of Power': 'शक्ति का समय',
        'SEROA': 'एसईआरओए',
        'SERPOA': 'एसईआरपीओए',
        'Safar-A Journey': 'सफर-ए यात्रा',
        'FOIS': 'एफओआईएस',
        'IPAS': 'आईपीएएस',
        'ICMS': 'आईसीएमएस',
        'System Map': 'सिस्टम मैप',
        'Codes & Man': 'कोड्स और मैन',
        'GST': 'जीएसटी',
   
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateText();
}

function updateText() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-lang-text`);
        if (text) {
            el.textContent = langMap[currentLang][text];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateText();
});

