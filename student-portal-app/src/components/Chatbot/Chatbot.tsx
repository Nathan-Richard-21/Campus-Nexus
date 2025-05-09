import React, { useState } from 'react';
import './Chatbot.css';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim()) {
            setMessages([...messages, { text: userInput, sender: 'user' }]);
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: `Bot response to: ${userInput}`, sender: 'bot' },
                ]);
            }, 1000);
            setUserInput('');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;