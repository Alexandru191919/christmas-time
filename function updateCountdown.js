// Function to handle countdown
function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // Christmas on Dec 25 of the current year

    // Check if today is Christmas
    if (
        now.getDate() === christmas.getDate() &&
        now.getMonth() === christmas.getMonth()
    ) {
        document.body.style.background = "green"; // Change background to green on Christmas
        document.body.style.color = "white"; // Adjust text color for contrast
        document.querySelector('.calendar').innerHTML = `
            <h1>Merry Christmas! 🎅🎄</h1>
            <p>Enjoy the holiday season!</p>
        `;
        return; // Exit the function since countdown is not needed
    }

    // Calculate the countdown
    const diff = christmas - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update countdown values
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown immediately
updateCountdown();


let result = document.getElementById("make-it-jolly");

        function changeColor(color) {
            document.body.style.background = color;
        }

        function myFunc() {
            changeColor('yellow');
            result.innerHTML = "Background Color changed";
        }