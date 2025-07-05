import React from 'react';
import { Flame, Zap, Users, Star, ArrowRight } from 'lucide-react';
import { RoasterType } from '../App';

interface HeroProps {
  onSelectRoaster: (roaster: RoasterType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectRoaster }) => {
  const roasterCards = [
    {
      id: 'resume' as RoasterType,
      title: 'Resume Roaster',
      description: 'Get your resume roasted by AI. We\'ll find every buzzword and missed opportunity.',
      icon: '📄',
      color: 'from-blue-500 to-purple-600',
      sample: '"This resume screams \'I know Figma\' but forgets to mention coding."'
    },
    {
      id: 'project' as RoasterType,
      title: 'Project Roaster',
      description: 'GitHub repos and project ideas get the treatment they deserve.',
      icon: '🚀',
      color: 'from-green-500 to-blue-600',
      sample: '"Another todo app? How groundbreaking."'
    },
    {
      id: 'code' as RoasterType,
      title: 'Code Roaster',
      description: 'Code review meets comedy. We\'ll roast your logic and naming choices.',
      icon: '🔥',
      color: 'from-red-500 to-pink-600',
      sample: '"You really wrote 300 lines of nested if-else? Bold move."'
    },
    {
      id: 'startup' as RoasterType,
      title: 'Startup Idea Roaster',
      description: 'Present your startup idea to our sarcastic AI investor.',
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
      sample: '"So... it\'s like Uber, but for renting spoons?"'
    },
    {
      id: 'portfolio' as RoasterType,
      title: 'Portfolio Roaster',
      description: 'Website design, loading times, and everything in between.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-600',
      sample: '"This portfolio is cleaner than your commit history."'
    },
    {
      id: 'excuse' as RoasterType,
      title: 'Excuse Generator',
      description: 'Generate hilarious, manager-friendly excuses for your bugs.',
      icon: '🤷',
      color: 'from-indigo-500 to-purple-600',
      sample: '"It\'s not a bug, it\'s a legacy feature."'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Developers Roasted' },
    { number: '50K+', label: 'Lines of Code Reviewed' },
    { number: '5K+', label: 'Resumes Improved' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Flame className="w-16 h-16 text-orange-500 animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce"></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-6">
              DevBurn
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The AI-powered roast platform that helps developers grow through 
              <span className="text-orange-400 font-semibold"> hilariously honest feedback</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={() => onSelectRoaster('resume')}
                className="group bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Start Roasting</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => onSelectRoaster('scorecard')}
                className="text-gray-300 hover:text-white px-8 py-4 rounded-full border border-gray-600 hover:border-orange-400 transition-all duration-300 font-semibold"
              >
                View Scorecard
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Roaster Cards */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Roaster
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pick your poison. Each roaster specializes in finding the gaps you didn't know you had.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roasterCards.map((card, index) => (
              <div
                key={card.id}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => onSelectRoaster(card.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                     style={{ backgroundImage: `linear-gradient(135deg, ${card.color.split(' ')[1]}, ${card.color.split(' ')[3]})` }}></div>
                
                <div className="relative">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-3 border-l-4 border-orange-400">
                    <p className="text-sm italic text-gray-300">
                      {card.sample}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center text-orange-400 font-semibold group-hover:text-orange-300 transition-colors">
                    <span>Try it now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why DevBurn?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Insights</h3>
              <p className="text-gray-400">
                Our AI doesn't just roast—it provides actionable feedback to help you improve.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
              <p className="text-gray-400">
                Join thousands of developers who've improved their skills through our platform.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Shareable Results</h3>
              <p className="text-gray-400">
                Generate shareable roast certificates and badges for your social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};