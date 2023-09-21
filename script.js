 // Функція для відправлення повідомлення
 function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var messageText = messageInput.value;

    if (messageText.trim() === '') {
        return;
    }

    var chatContainer = document.getElementById('chat-container');
    var messageElement = document.createElement('div');
    messageElement.textContent = messageText;
    chatContainer.appendChild(messageElement);

    // Очистити поле вводу
    messageInput.value = '';
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть ваше повідомлення: ', (message) => {
    console.log(`Ви відправили: ${message}`);
    rl.close();
});