import React, { useEffect, useRef } from "react";

const PropHistory = ({ messages, avatar }) => {
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className="flex flex-col h-full p-4 overflow-y-auto no-scrollbar">
            {messages.map((msg, index) => (
                <div key={index} className="flex flex-col w-full ">
                    <div className="flex flex-rows float-right items-center mb-4 p-4 bg-slate-500 text-white rounded-lg">
                        {/* <img src={avatar} alt="Avatar" className="w-8 h-8 mr-4 rounded-full" /> */}
                        {msg}
                    </div>
                    {index < 3 &&
                        <div className="flex flex-rows left items-center mb-4 p-4 bg-slate-900 text-white rounded-lg">
                            <img src={avatar} alt="Avatar" className="w-8 h-8 mr-4 rounded-full" />
                            {index === 0 ? "Hello, How can I help you" : index === 1 ? "sure, It's my pleasure to help you." : "No problem"}
                        </div>
                    }
                    <div ref={bottomRef} />

                </div>
            ))}
        </div>
    );
};

export default PropHistory;