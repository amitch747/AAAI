// const inputBox = document.querySelector('#userInput');
// const submitButton = document.querySelector('#submitButton');
// const chatHistory = document.querySelector('#chatHistory');

// function addMessage(message) {
//     chatHistory.
// };

// submitButton.addEventListener('click', () => {
// const userMessage = inputBox.ariaValueMax.trim();
//   addMessage()
// });

document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-history');
  const inputField = document.getElementById('user-input');
  const sendButton = document.getElementById('submit-button');

  function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);

    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim();
    if (userMessage) {
      appendMessage(userMessage, 'user-input');
      inputField.value = '';

      // Fake bot response after a short delay
      setTimeout(() => {
        appendMessage('Hello! How can I help you?', 'bot-message');
      }, 500);
    }
  });

  // Allow Enter key to send message
  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });
});
