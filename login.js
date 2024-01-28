// Set the date you want to countdown to in MM/DD/YYYY format
const countDownDate = new Date("01/28/2024 9:40:00").getTime();

// Set the reason code (1 for "abuse of platform", 2 for "toxicity")
const reasonCode = 2; // Change this to the desired reason code

// Function to get the reason based on the code
function getReason(code) {
    switch (code) {
        case 1:
            return "idk";
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

// Function to authenticate users
function authenticate() {
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;

    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        if (user.banned) {
            // Display message in terminal for banned user
            appendMessage("This account is banned. Please contact support.");
        } else {
            // Proceed with authentication for non-banned user
            simulateVerification(user.redirect);
        }
    } else {
        // Play the incorrect password sound
        var incorrectAudio = document.getElementById('incorrectPasswordAudio');
        incorrectAudio.play();

        alert('Invalid user or password, try again!');
    }
}

// Function to append message to terminal
function appendMessage(message) {
    const output = document.querySelector('.output');
    output.innerHTML += message + '<br>';
}
