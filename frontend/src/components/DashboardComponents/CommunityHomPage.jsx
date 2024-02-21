import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CommunityHomPage() {
    const [message, setMessage] = useState('');
    const { id } = useParams();

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        // Handle sending message logic here
        console.log('Message sent:', message);
        // You can add logic to send the message to the server or perform any other actions
        // Clear the message input after sending
        setMessage('');
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-grow">
                {id}
            </div>

            <div className="bg-gray-200 p-4 flex">
                <input 
                    className="flex-grow mr-2 py-2 px-4 border border-gray-400 rounded-lg focus:outline-none"
                    type="text" 
                    value={message} 
                    onChange={handleMessageChange} 
                    placeholder="Type your message here" 
                />
                <button 
                    className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default CommunityHomPage;
