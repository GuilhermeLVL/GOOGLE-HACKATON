import React, { useState, useRef, useEffect } from 'react';
import { useAppStore } from '../../store';
import type { ChatMessage } from '../../types/transcript';

const ChatMessageItem: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`chat-message chat-message-${message.type}`}>
      <div className="message-bubble">
        <p className="message-content">{message.content}</p>
        <p className={`message-time message-time-${message.type}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

const ChatWindow: React.FC = () => {
  const { chatMessages, addChatMessage } = useAppStore();
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      timestamp: new Date().toISOString(),
      type: 'user',
      content: inputMessage.trim()
    };

    addChatMessage(userMessage);
    setInputMessage('');
    setIsLoading(true);

    try {
      // TODO: Implement Chrome AI API call for chat response
      // For now, simulate a response
      setTimeout(() => {
        const assistantMessage: ChatMessage = {
          id: `msg_${Date.now() + 1}`,
          timestamp: new Date().toISOString(),
          type: 'assistant',
          content: 'This is a placeholder response. AI chat integration will be implemented next.'
        };
        addChatMessage(assistantMessage);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Chat error:', error);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-window">
      {/* Chat Header */}
      <div className="chat-header">
        <h3>AI Assistant</h3>
        <p>Ask questions about the conversation</p>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {chatMessages.length === 0 ? (
          <div className="chat-empty">
            <p>No messages yet.</p>
            <p>Start a conversation to ask questions!</p>
          </div>
        ) : (
          chatMessages.map((message) => (
            <ChatMessageItem key={message.id} message={message} />
          ))
        )}
        {isLoading && (
          <div className="loading-indicator">
            <div className="message-bubble">
              <span className="loading-text">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <div className="input-group">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about the conversation..."
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;