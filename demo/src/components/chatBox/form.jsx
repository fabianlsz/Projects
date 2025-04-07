import React, { useState, useRef, useEffect } from 'react';
import { useGlobal } from '../../states/GlobalState';

const Form = () => {
    const [message, setMessage] = useState('');
    const { promptMsg, setPromptMsg } = useGlobal();
    const textareaRef = useRef(null);

    // Auto-resize the textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [message]);

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim() === '') return;
        setPromptMsg(message);
        onSend(message.trim());
        setMessage('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    return (
        <div className='flex bg-red w-full'>
            {/* <div>{promptMsg}</div> */}
            <form
                onSubmit={handleSend}
                className="flex w-full bottom-0 left-0 right-0 bg-gray-900 p-4 border-t border-gray-700"
            >
                <div className="max-w-2xl w-full mx-auto flex items-end gap-2">
                    <textarea
                        ref={textareaRef}
                        rows={1}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message ChatGPT..."
                        className="w-full resize-none rounded-lg p-3 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
