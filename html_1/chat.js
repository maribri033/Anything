document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    // Handle the message (e.g., send to server or display in chat)
    console.log('Message sent:', message);
    
    // Clear the input field
    chatInput.value = '';
    
});
let userNameInput = document.getElementById('username');

// Example of different data types
let userName = "John Doe"; // string
let userAge = 25; // integer

// Example of mathematical operation
let nextYearAge = userAge + 1;

// Example of decision making with if-else statement
if (userAge > 18) {
    console.log("User is an adult");
} else {
    console.log("User is a minor");
}

// Example of using logical operators
if (userAge > 18 && userAge < 65) {
    console.log("User is an adult but not a senior");
}

// Function to handle form submission
document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    let enteredUserName = userNameInput.value;
    console.log("Account created for: " + enteredUserName);
    document.getElementById('create-account').innerHTML = "<p>Account created for: " + enteredUserName + "</p>";
});