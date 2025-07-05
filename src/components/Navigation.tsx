import React from 'react';
import { Flame, User, Code, Lightbulb, Globe, Trophy, MessageCircle } from 'lucide-react';
import { RoasterType } from '../App';

interface NavigationProps {
  activeRoaster: RoasterType;
  onSelectRoaster: (roaster: RoasterType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeRoaster, onSelectRoaster }) => {
  const navItems = [
    { id: 'hero' as RoasterType, icon: Flame, label: 'DevBurn', isLogo: true },
    { id: 'resume' as RoasterType, icon: User, label: 'Resume' },
    { id: 'project' as RoasterType, icon: Code, label: 'Project' },
    { id: 'code' as RoasterType, icon: Code, label: 'Code' },
    { id: 'startup' as RoasterType, icon: Lightbulb, label: 'Startup' },
    { id: 'portfolio' as RoasterType, icon: Globe, label: 'Portfolio' },
    { id: 'excuse' as RoasterType, icon: MessageCircle, label: 'Excuse Gen' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map(({ id, icon: Icon, label, isLogo }) => (
              <button
                key={id}
                onClick={() => onSelectRoaster(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isLogo
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 font-bold text-xl'
                    : activeRoaster === id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={isLogo ? 24 : 18} />
                <span className={isLogo ? 'text-xl font-bold' : 'text-sm font-medium'}>
                  {label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Powered by <span className="text-orange-400 font-semibold">SnapStay</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};