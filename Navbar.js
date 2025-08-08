import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#222', color: 'white' }}>
      <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
      <Link to="/dashboard" style={{ margin: '10px', color: 'white' }}>Dashboard</Link>
      <Link to="/courses" style={{ margin: '10px', color: 'white' }}>Courses</Link>
      <Link to="/chatbot" style={{ margin: '10px', color: 'white' }}>Chatbot</Link>
    </nav>
  );
}
