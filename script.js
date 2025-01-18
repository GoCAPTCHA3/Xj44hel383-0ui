function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha-text').innerText = captcha;
    return captcha;
}

let currentCaptcha = generateCaptcha();

function verifyCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    if (userInput === currentCaptcha) {
        alert('تم التحقق بنجاح!');
        // يمكنك تنفيذ الإجراءات المطلوبة بعد التحقق بنجاح
    } else {
        alert('الرجاء إدخال الكود الصحيح.');
    }
    currentCaptcha = generateCaptcha();
}
