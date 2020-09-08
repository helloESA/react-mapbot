import React from 'react';
import './App.css';
import CustomChatbot from './components/chatbot/CustomChatbot';

function App() {
  return (
    <div>
        <header className="App-header">
          <h5>Selamat Datang di Mapbot</h5>
          <CustomChatbot />
        </header>
        
    </div>
  );
}

export default App;
