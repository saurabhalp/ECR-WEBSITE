let currentLang = 'en';

const langMap = {
    'en': {
        'South Eastern Railway': 'South Eastern Railway',
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
        'ADRA DIVISION': 'ADRA DIVISION',
        'Adra division spreads over 3 districts of West Bengal viz. Bankura, Purulia & West Midnapur and 2 districts of Jharkhand viz. Saraikela and Bokaro having a route km of 732.503': 'Adra division spreads over 3 districts of West Bengal viz. Bankura, Purulia & West Midnapur and 2 districts of Jharkhand viz. Saraikela and Bokaro having a route km of 732.503',
        'CHAKRADHARPUR DIVISION': 'CHAKRADHARPUR DIVISION',
        'Chakradharpur division spreads over 4 districts of Orissa viz. Mayurbhanj, Keonjhar, Jharsuguda and Sambalpur having a route km of 758.3.': 'Chakradharpur division spreads over 4 districts of Orissa viz. Mayurbhanj, Keonjhar, Jharsuguda and Sambalpur having a route km of 758.3.',
        'KHARAGPUR DIVISION': 'KHARAGPUR DIVISION',
        'Kharagpur division spreads over 3 districts of West Bengal viz. Howrah, Midnapore East and West, one district of Jharkhand viz., East Singhbhum and 3 districts of Orissa viz., Balasore, Mayurbhanj and Bhadrak. Route km of 2011.': 'Kharagpur division spreads over 3 districts of West Bengal viz. Howrah, Midnapore East and West, one district of Jharkhand viz., East Singhbhum and 3 districts of Orissa viz., Balasore, Mayurbhanj and Bhadrak. Route km of 2011.',
        'RANCHI DIVISION': 'RANCHI DIVISION',
        'Ranchi division spreads over 7 districts of Jharkhand viz., Ranchi, Lohardaga, Gumla, Simdega, Khunti, Ramgarh and Saraikela-Kharsawan and Purulia district of West Bengal. Route km is 441.94.': 'Ranchi division spreads over 7 districts of Jharkhand viz., Ranchi, Lohardaga, Gumla, Simdega, Khunti, Ramgarh and Saraikela-Kharsawan and Purulia district of West Bengal. Route km is 441.94.',
        'About Us': 'About Us',
        'South Eastern Railway is one of the seventeen railway zones in India. We aim to provide the best railway services to our passengers.': 'South Eastern Railway is one of the seventeen railway zones in India. We aim to provide the best railway services to our passengers.',
        'Quick Links': 'Quick Links',
        'Contact Us': 'Contact Us',
        'Email: info@serailway.com': 'Email: info@serailway.com',
        'Phone: +91-123-456-7890': 'Phone: +91-123-456-7890',
        'Address: Garden Reach, Kolkata, West Bengal': 'Address: Garden Reach, Kolkata, West Bengal',
        'Follow Us': 'Follow Us',
        'Twitter': 'Twitter',
        'Facebook': 'Facebook',
        'Instagram': 'Instagram',
        '&copy; 2024 South Eastern Railway. All rights reserved.': '&copy; 2024 South Eastern Railway. All rights reserved.'
    },
    'hi': {
        'South Eastern Railway': 'दक्षिण पूर्वी रेलवे',
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
        'ADRA DIVISION': 'आद्रा मंडल',
        'Adra division spreads over 3 districts of West Bengal viz. Bankura, Purulia & West Midnapur and 2 districts of Jharkhand viz. Saraikela and Bokaro having a route km of 732.503': 'आद्रा मंडल पश्चिम बंगाल के 3 जिलों बैंकुरा, पुरुलिया और पश्चिम मिदनापुर और झारखंड के 2 जिलों सराईकेला और बोकारो में फैला हुआ है। मार्ग किलोमीटर 732.503 है।',
        'CHAKRADHARPUR DIVISION': 'चक्रधरपुर मंडल',
        'Chakradharpur division spreads over 4 districts of Orissa viz. Mayurbhanj, Keonjhar, Jharsuguda and Sambalpur having a route km of 758.3.': 'चक्रधरपुर मंडल ओडिशा के 4 जिलों मयूरभंज, क्योंझर, झारसुगुडा और संबलपुर में फैला हुआ है। मार्ग किलोमीटर 758.3 है।',
        'KHARAGPUR DIVISION': 'खड़गपुर मंडल',
        'Kharagpur division spreads over 3 districts of West Bengal viz. Howrah, Midnapore East and West, one district of Jharkhand viz., East Singhbhum and 3 districts of Orissa viz., Balasore, Mayurbhanj and Bhadrak. Route km of 2011.': 'खड़गपुर मंडल पश्चिम बंगाल के 3 जिलों हावड़ा, पूर्व और पश्चिम मिदनापुर, झारखंड का एक जिला पूर्वी सिंहभूम और ओडिशा के 3 जिलों बालासोर, मयूरभंज और भद्रक में फैला हुआ है। मार्ग किलोमीटर 2011 है।',
        'RANCHI DIVISION': 'रांची मंडल',
        'Ranchi division spreads over 7 districts of Jharkhand viz., Ranchi, Lohardaga, Gumla, Simdega, Khunti, Ramgarh and Saraikela-Kharsawan and Purulia district of West Bengal. Route km is 441.94.': 'रांची मंडल झारखंड के 7 जिलों रांची, लोहरदगा, गुमला, सिमडेगा, खूंटी, रामगढ़ और सराईकेला-खरसावां और पश्चिम बंगाल के पुरुलिया जिले में फैला हुआ है। मार्ग किलोमीटर 441.94 है।',
        'About Us': 'हमारे बारे में',
        'South Eastern Railway is one of the seventeen railway zones in India. We aim to provide the best railway services to our passengers.': 'दक्षिण पूर्वी रेलवे भारत के सत्रह रेलवे जोनों में से एक है। हम अपने यात्रियों को सर्वश्रेष्ठ रेलवे सेवाएं प्रदान करने का लक्ष्य रखते हैं।',
        'Quick Links': 'त्वरित लिंक',
        'Contact Us': 'संपर्क करें',
        'Email: info@serailway.com': 'ईमेल: info@serailway.com',
        'Phone: +91-123-456-7890': 'फोन: +91-123-456-7890',
        'Address: Garden Reach, Kolkata, West Bengal': 'पता: गार्डन रीच, कोलकाता, पश्चिम बंगाल',
        'Follow Us': 'हमें फॉलो करें',
        'Twitter': 'ट्विटर',
        'Facebook': 'फेसबुक',
        'Instagram': 'इंस्टाग्राम',
        '&copy; 2024 South Eastern Railway. All rights reserved.': '&copy; 2024 दक्षिण पूर्वी रेलवे। सर्वाधिकार सुरक्षित।'
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

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
