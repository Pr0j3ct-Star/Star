// JavaScript code

// Function to handle command submission
function submitCommand() {
    var inputField = document.getElementById('command-input');
    var command = inputField.value;

    // Append the command to the output
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML += '<br>' + '<span class="prompt">Project Chaos V2 Site ~$</span> <span class="command">' + command + '</span>';

    // Clear the input field
    inputField.value = '';

    // Scroll to the bottom of the output
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Function to handle Enter key press
document.getElementById('command-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitCommand();
    }
});
