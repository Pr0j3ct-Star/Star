// Set the date you want to countdown to in MM/DD/YYYY format
const countDownDate = new Date("01/20/2024 9:40:00").getTime();

// Set the reason code (1 for "abuse of platform", 2 for "toxicity")
const reasonCode = 1; // Change this to the desired reason code

// Function to get the reason based on the code
function getReason(code) {
    switch (code) {
        case 1:
            return "Getting my ass cleaning like my mother";
        case 2:
            return "Reporting Website to teachers/staff.";
        default:
            return "Reason not specified";
    }
}

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Get the reason based on the code
    const reason = getReason(reasonCode);

    // Display the result with additional text
    document.getElementById("countdown").innerHTML = `Reason for ban: ${reason} | Days remaining until unban: ${days}`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = `Please wait for creator to unban you. (${reason})`;
    }
}, 1000);
