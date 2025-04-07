import React, { useState, useEffect } from "react";
import Form from "./Form";
import PropHistory from "./PropHistory";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const avatarUrl = '/public/small_robo.png';

    // Demo history prompt
    useEffect(() => {
        const demoMessages = [
            "AI Response to: Hello",
            "AI Response to: How are you?",
            "AI Response to: What's the weather like?",
            "AI Response to: Tell me a joke",
            "AI Response to: Goodbye",
            "AI Response to: Hello",
            "AI Response to: How are you?",
            "AI Response to: What's the weather like?",
            "AI Response to: Tell me a joke",
            "AI Response to: Goodbye",
            "AI Response to: Hello",
            "AI Response to: How are you?",
            "AI Response to: What's the weather like?",
            "AI Response to: Tell me a joke",
            "AI Response to: Goodbye"
        ];
        setMessages(demoMessages);
    }, []);

    const handleMessageSend = (message) => {
        const aiResponse = `AI Response to: ${message}`;
        setMessages([...messages, aiResponse]);
    };

    return (
        <div className="w-full h-full p-4 border-r border-gray-800 flex flex-col">
            <PropHistory messages={messages} avatar={avatarUrl} />
            <Form onSend={handleMessageSend} />
        </div>
    );
};

export default ChatBox;