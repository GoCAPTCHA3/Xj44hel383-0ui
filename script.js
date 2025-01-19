// Generate random counts for apples and oranges
const appleCount = Math.floor(Math.random() * 6) + 1; // Random between 1 and 6
const orangeCount = Math.floor(Math.random() * 6) + 1; // Random between 1 and 6

// Total fruits
const totalFruits = appleCount + orangeCount;

// Display fruit images
const fruitContainer = document.getElementById('fruit-codes');
for (let i = 0; i < appleCount; i++) {
    const img = document.createElement('img');
    img.src = 'apple.png'; // Path to apple image
    img.alt = 'Apple';
    img.classList.add('fruit');
    fruitContainer.appendChild(img);
}
for (let i = 0; i < orangeCount; i++) {
    const img = document.createElement('img');
    img.src = 'orange.png'; // Path to orange image
    img.alt = 'Orange';
    img.classList.add('fruit');
    fruitContainer.appendChild(img);
}

// Function to check user input
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value;
    const message = document.getElementById('message');
    if (parseInt(userAnswer) === totalFruits) {
        message.style.color = 'green';
        message.textContent = 'Correct! You are not a robot.';
    } else {
        message.style.color = 'red';
        message.textContent = 'Incorrect. Please try again.';
    }
                 }
