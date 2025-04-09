import React, { useState, useEffect } from "react";
import Form from "./Form";
import PropHistory from "./PropHistory";
import { useGlobal } from '../../states/GlobalState';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const { requestMsg, setRequestMsg } = useGlobal();
    const avatarUrl = '/Archi.ai.png';

    // Demo history prompt
    // useEffect(() => {
    //     const demoMessages = [
    //         "Hello",
    //     ];
    //     setMessages(demoMessages);
    // }, []);
    useEffect(() => {
        if (requestMsg !== "")
            setMessages([...messages, `${requestMsg}`]);
    }, [requestMsg])

    const handleMessageSend = (message) => {
        const aiResponse = `AI Response to: ${message}`;
        setMessages([...messages, aiResponse]);
    };

    return (
        <div className="w-full h-full p-4 flex flex-col">
            <PropHistory messages={messages} avatar={avatarUrl} />
            <Form onSend={handleMessageSend} />
        </div>
    );
};

export default ChatBox;