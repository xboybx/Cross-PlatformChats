import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import NavigationBar from './components/NavigationBar';
import { mockMessages } from './data/mockMessages';

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen  ">
      <NavigationBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden m-4 gap-4  ">
        {/* Sidebar */}
        <div
          className={`w-[320px] glass overflow-y-auto rounded-3xl 
            transition-all duration-500 ease-out ${isSidebarOpen ? '' : '-ml-[336px]'}`}
        >
          {mockMessages.map(msg => (
            <div
              key={msg.id}
              className={`p-4 border-b border-white/20 cursor-pointer flex items-center gap-3 
                transition-all duration-300 hover:bg-white/30 animate-float-in hover-float
                ${selectedMessage?.id === msg.id ? 'bg-white/40' : ''}`}
              onClick={() => setSelectedMessage(msg)}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-white/50"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-lg flex items-center justify-center 
                    ring-2 ring-white/50 shadow-glass-sm"
                  style={{ backgroundColor: msg.color }}
                >
                  <msg.icon size={11} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-black mb-0.5 truncate">{msg.sender}</div>
                <div className="text-sm text-slate-600 truncate">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="flex-1 glass flex flex-col rounded-3xl">
          {selectedMessage ? (
            <>
              <div className="px-5 py-4 border-b border-white/20 flex items-center justify-between 
                backdrop-blur-xl backdrop-saturate-150">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={selectedMessage.avatar}
                      alt={selectedMessage.sender}
                      className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-white/50"
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-lg flex items-center justify-center 
                        ring-2 ring-white/50 shadow-glass-sm"
                      style={{ backgroundColor: selectedMessage.color }}
                    >
                      <selectedMessage.icon size={11} />
                    </div>
                  </div>
                  <div className="font-bold text-black">{selectedMessage.sender}</div>
                </div>
                <a
                  href={selectedMessage.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent2 text-white border-2 border-black shadow-brutal-sm
                    hover:translate-x-0 hover:translate-y-0 neu-button text-sm font-bold rounded-xl hover-lift"
                  style={{ color: selectedMessage.color }}
                >
                  <selectedMessage.icon size={18} />
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
              <div className="flex-1 p-5 overflow-y-auto bg-black/5 backdrop-blur-md">
                {selectedMessage.conversation.map(message => (
                  <div
                    key={message.id}
                    className={`flex flex-col mb-5 max-w-[85%] animate-brutal-fade
                      ${message.sender === 'me' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                  >
                    <div className={`max-w-full px-4 py-3 mb-1 leading-relaxed message-bubble
                      ${message.sender === 'me'
                        ? 'bg-primary/90 text-white backdrop-blur-xl'
                        : 'bg-white/30 backdrop-blur-xl'}`}
                    >
                      {message.text}
                    </div>
                    <div className={`text-xs font-medium ${message.sender === 'me' ? 'mr-2' : 'ml-2'}`}>
                      {message.time}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/20 flex gap-3 items-center backdrop-blur-xl">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 
                    placeholder-slate-400 outline-none transition-all duration-300
                    focus:bg-white/20 focus:ring-2 focus:ring-primary/30"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  aria-label="Send message"
                  className="w-12 h-12 flex items-center justify-center bg-primary/90 text-white 
                    rounded-xl hover-float disabled:opacity-50 disabled:cursor-not-allowed
                    shadow-glass-sm hover:shadow-glass disabled:hover:shadow-none"
                >
                  <IoSend size={20} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-brutal-fade">
              <h3 className="text-2xl font-bold mb-2">Select a Conversation</h3>
              <p className="text-base max-w-[400px] leading-relaxed">
                Choose a conversation from the sidebar to start messaging
              </p>
            </div>
          )}
        </div>

      </div>
      {/* Footer */}
      <footer className="text-center h-5  text-xs text-slate-600">
        <p>Developed by Jaswanth</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App