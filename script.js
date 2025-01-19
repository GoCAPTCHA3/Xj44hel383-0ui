document.addEventListener("DOMContentLoaded", () => {
    const fruits = [
        { name: "apple", imageSrc: "apple.png" },
        { name: "orange", imageSrc: "orange.png" },
        { name: "banana", imageSrc: "banana.png" }
    ];

    const fruitContainer = document.getElementById("fruit-container");
    const captchaQuestion = document.getElementById("captcha-question");
    const captchaAnswerInput = document.getElementById("captcha-answer");
    const submitButton = document.getElementById("submit-captcha");
    const resultMessage = document.getElementById("result-message");
    const captchaInstruction = document.getElementById("captcha-instruction");
    const languageSelect = document.getElementById("language");

    // Translate function based on selected language
    const translations = {
        en: {
            instruction: "حدد العدد الصحيح من الفواكه:",
            verify: "تحقق",
            success: "التحقق ناجح! 🎉",
            failure: "التحقق فشل. حاول مجددًا."
        },
        ar: {
            instruction: "حدد العدد الصحيح من الفواكه:",
            verify: "تحقق",
            success: "التحقق ناجح! 🎉",
            failure: "التحقق فشل. حاول مجددًا."
        },
        fr: {
            instruction: "Sélectionnez le bon nombre de fruits:",
            verify: "Vérifier",
            success: "Vérification réussie! 🎉",
            failure: "La vérification a échoué. Réessayez."
        }
    };

    function generateCaptcha() {
        // Shuffle the fruits array to randomize it
        const shuffledFruits = fruits.sort(() => 0.5 - Math.random()).slice(0, 3); 

        fruitContainer.innerHTML = ""; // Clear previous fruits
        shuffledFruits.forEach(fruit => {
            const div = document.createElement("div");
            div.classList.add("fruit-item");
            div.innerHTML = `<img src="${fruit.imageSrc}" alt="${fruit.name}" class="fruit-image">`;
            fruitContainer.appendChild(div);
        });

        // Store correct answer as numbers of fruits (apple = 001, orange = 002, etc.)
        const correctAnswer = shuffledFruits.map(fruit => {
            if (fruit.name === "apple") return "001";
            if (fruit.name === "orange") return "002";
            if (fruit.name === "banana") return "003";
        }).join("");

        return correctAnswer;
    }

    // Generate captcha on page load
    let captchaCorrectAnswer = generateCaptcha();
    captchaQuestion.innerHTML = `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f9f9f9"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#333">تحديد العدد الصحيح</text>
    </svg>`;

    // Function to update content based on language
    function updateContent(language) {
        captchaInstruction.textContent = translations[language].instruction;
        submitButton.textContent = translations[language].verify;
        resultMessage.textContent = "";
    }

    // Update content based on default or selected language
    languageSelect.addEventListener("change", () => {
        const selectedLang = languageSelect.value;
        updateContent(selectedLang);
        captchaCorrectAnswer = generateCaptcha(); // Regenerate captcha on language change
    });

    // Set default language content on page load
    updateContent(languageSelect.value);

    submitButton.addEventListener("click", () => {
        const userAnswer = captchaAnswerInput.value.trim();
        if (userAnswer === captchaCorrectAnswer) {
            resultMessage.textContent = translations[languageSelect.value].success;
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = translations[languageSelect.value].failure;
            resultMessage.style.color = "red";
        }
    });
});