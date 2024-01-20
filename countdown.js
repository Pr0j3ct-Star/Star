// Set the date you want to countdown to
const countDownDate = new Date("Feb 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the result with additional text
    document.getElementById("countdown").innerHTML = "Days remaining until unban: " + days;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Please wait while i unban you [depends if im busy]";
    }
}, 1000);
