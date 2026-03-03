document.addEventListener("DOMContentLoaded", () => {

    const toggleThemeBtn = document.getElementById("toggleThemeBtn");
    const quoteBtn = document.getElementById("quoteBtn");
    const displayText = document.getElementById("displayText");
    const body = document.body;

    const quotes = [
        "Success is built on consistency.",
        "Small progress is still progress.",
        "Stay disciplined, stay dangerous.",
        "Hard work beats talent.",
        "Focus creates results."
    ];

    // Dark mode toggle
    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            toggleThemeBtn.textContent = "Disable Dark Mode";
        } else {
            toggleThemeBtn.textContent = "Enable Dark Mode";
        }
    });

    // Random quote generator
    quoteBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        displayText.textContent = quotes[randomIndex];
    });

});