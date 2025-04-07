import React from "react";

const PropHistory = ({ messages, avatar }) => {
    return (
        <div className="flex flex-col w-full h-full p-4 overflow-y-auto no-scrollbar">
            {messages.map((msg, index) => (
                <div key={index} className="flex items-center mb-4 p-4 bg-slate-900 text-white rounded-lg">
                    <img src={avatar} alt="Avatar" className="w-8 h-8 mr-4 rounded-full" />
                    {msg}
                </div>
            ))}
        </div>
    );
};

export default PropHistory;