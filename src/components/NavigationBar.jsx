import { useState } from 'react';
import { HiMenu, HiSearch, HiBell, HiDotsHorizontal } from 'react-icons/hi';

const NavigationBar = ({ onMenuClick }) => {
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <nav className="glass-darker flex items-center px-4 py-3 rounded-3xl mb-4">
      <div className="flex items-center gap-4">
        <button
          aria-label="Menu"
          onClick={onMenuClick}
          className="w-10 h-10 flex items-center justify-center bg-white/10 text-slate-900
  rounded-xl hover-float shadow-glass-sm"
        >
          <HiMenu size={20} />
        </button>
        <div className="flex gap-8 ml-6">
          {['inbox', 'archived', 'unread'].map((tab) => (
            <button 
              key={tab}
              className={`py-2 text-sm font-medium relative transition-all duration-300
  ${activeTab === tab 
    ? 'text-primary' 
    : 'text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <div className="absolute bottom-[-11px] left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      <h1 className="text-xl font-bold text-black absolute left-1/2 transform -translate-x-1/2">
        Unified Messages
      </h1>
      <div className="flex items-center gap-2 ml-auto">
        {[
          { icon: HiSearch, label: 'Search' },
          { icon: HiBell, label: 'Notifications' },
          { icon: HiDotsHorizontal, label: 'More options' }
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center bg-white/10 text-slate-900
  rounded-xl hover-float shadow-glass-sm"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;