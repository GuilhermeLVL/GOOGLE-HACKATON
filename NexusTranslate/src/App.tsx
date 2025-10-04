import React from 'react';
import Header from './components/Header/Header';
import Controls from './components/Controls/Controls';
import TranscriptView from './components/TranscriptView/TranscriptView';
import ChatWindow from './components/ChatWindow/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Controls />
      <div className="main-content">
        <TranscriptView />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
