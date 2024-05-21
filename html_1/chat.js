document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    // Handle the message (e.g., send to server or display in chat)
    console.log('Message sent:', message);

    // Clear the input field
    chatInput.value = '';
});

