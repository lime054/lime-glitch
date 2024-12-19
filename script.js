// هذا السكربت يساعد على إضافة تأثير المتحرك للنص
document.querySelector('.glitch-text').addEventListener('animationiteration', () => {
    document.querySelector('.glitch-text').classList.add('glitched');
});
