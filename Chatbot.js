import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    setMessages([...messages, { text: input, from: 'user' }]);
    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "This is an AI reply.", from: 'bot' }]);
    }, 1000);
    setInput("");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chatbot Tutor</h2>
      <div style={{ border: '1px solid #ddd', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.from}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
