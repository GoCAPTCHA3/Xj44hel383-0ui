document.addEventListener("DOMContentLoaded", () => {
    const fruits = ["apple", "orange", "banana"];
    const counts = {
        apple: Math.floor(Math.random() * 5) + 1,
        orange: Math.floor(Math.random() * 5) + 1,
        banana: Math.floor(Math.random() * 5) + 1,
    };

    const imagesContainer = document.getElementById("images-container");

    fruits.forEach((fruit) => {
        for (let i = 0; i < counts[fruit]; i++) {
            const img = document.createElement("img");
            img.src = `images/${fruit}.png`; // Add your fruit images in the "images" folder
            img.alt = fruit;
            img.style.width = "50px";
            img.style.margin = "5px";
            imagesContainer.appendChild(img);
        }
    });

    document.getElementById("verify-btn").addEventListener("click", () => {
        const apples = parseInt(document.getElementById("apples").value) || 0;
        const oranges = parseInt(document.getElementById("oranges").value) || 0;
        const bananas = parseInt(document.getElementById("bananas").value) || 0;

        const result = document.getElementById("result");
        if (apples === counts.apple && oranges === counts.orange && bananas === counts.banana) {
            result.textContent = "Correct!";
            result.style.color = "green";
        } else {
            result.textContent = "Try Again!";
            result.style.color = "red";
        }
    });

    const translations = {
        en: {
            title: "Count the Fruits",
            "apple-label": "Apples:",
            "orange-label": "Oranges:",
            "banana-label": "Bananas:",
            "verify-btn": "Verify",
        },
        ar: {
            title: "عد الفواكه",
            "apple-label": "تفاح:",
            "orange-label": "برتقال:",
            "banana-label": "موز:",
            "verify-btn": "تحقق",
        },
        fr: {
            title: "Comptez les Fruits",
            "apple-label": "Pommes:",
            "orange-label": "Oranges:",
            "banana-label": "Bananes:",
            "verify-btn": "Vérifier",
        },
    };

    document.querySelectorAll('input[name="language"]').forEach((radio) => {
        radio.addEventListener("change", (e) => {
            const lang = e.target.value;
            const texts = translations[lang];
            Object.keys(texts).forEach((key) => {
                document.getElementById(key).textContent = texts[key];
            });
        });
    });
});
