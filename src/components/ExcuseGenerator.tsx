import React, { useState } from 'react';
import { MessageCircle, Zap, RefreshCw, Copy, Share2, Bug } from 'lucide-react';

export const ExcuseGenerator: React.FC = () => {
  const [bugDescription, setBugDescription] = useState('');
  const [selectedExcuse, setSelectedExcuse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExcuse = async () => {
    if (!bugDescription.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const excuses = [
        "It's not a bug, it's a legacy feature that's been carefully preserved for backward compatibility.",
        "The code is working exactly as intended. The issue is with the user's expectations.",
        "This is actually a sophisticated Easter egg that only activates under specific conditions.",
        "The bug is a critical security feature that prevents unauthorized access to functionality.",
        "It's a distributed computing experiment - the error is happening on a different server.",
        "The code is quantum-entangled with the production server. Observing it changes its behavior.",
        "This is part of our new AI-driven error handling system. It's learning from user interactions.",
        "The bug is intentionally introduced to test our monitoring and alerting systems.",
        "It's a feature flag that's temporarily disabled for A/B testing purposes.",
        "The error is actually a subtle hint that the user should upgrade their browser from 2005."
      ];
      
      const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
      setSelectedExcuse(randomExcuse);
      setIsGenerating(false);
    }, 2000);
  };

  const copyExcuse = () => {
    if (selectedExcuse) {
      navigator.clipboard.writeText(selectedExcuse);
    }
  };

  const popularExcuses = [
    {
      excuse: "It works on my machine. Must be an environmental issue.",
      category: "Classic",
      votes: 1247
    },
    {
      excuse: "The code is self-documenting. If you can't read it, you shouldn't be touching it.",
      category: "Defensive",
      votes: 892
    },
    {
      excuse: "It's a race condition. The bug only happens when the stars align perfectly.",
      category: "Technical",
      votes: 756
    },
    {
      excuse: "The intern wrote that part. I was just reviewing it.",
      category: "Blame Game",
      votes: 634
    },
    {
      excuse: "It's a known issue. We're tracking it in our backlog for the next sprint.",
      category: "Procrastination",
      votes: 523
    },
    {
      excuse: "The bug is actually improving performance by preventing unnecessary operations.",
      category: "Spin Master",
      votes: 445
    }
  ];

  const excuseTypes = [
    { type: "Manager-Friendly", description: "Professional and diplomatic" },
    { type: "Technical Jargon", description: "Confuse them with complexity" },
    { type: "Philosophical", description: "Make them question reality" },
    { type: "Blame Shifter", description: "Redirect responsibility" },
    { type: "Feature Pitch", description: "Turn bugs into features" },
    { type: "Time Traveler", description: "Blame past/future versions" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Developer Excuse Generator</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Turn any bug into a feature with our AI-powered excuse generator. 
            Generate hilarious, manager-friendly explanations for your code issues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Generator Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Generate Your Excuse</h2>
              
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Describe Your Bug/Error
                </label>
                <textarea
                  value={bugDescription}
                  onChange={(e) => setBugDescription(e.target.value)}
                  placeholder="Describe what went wrong: 'The login button crashes the app when clicked twice' or 'Database returns random user data'..."
                  className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Excuse Types */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Excuse Style (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {excuseTypes.map((type, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-3 border border-gray-600 hover:border-indigo-400 transition-colors cursor-pointer">
                      <div className="font-semibold text-white text-sm">{type.type}</div>
                      <div className="text-xs text-gray-400">{type.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateExcuse}
                disabled={!bugDescription.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Generating Excuse...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Generate Excuse</span>
                  </span>
                )}
              </button>

              {/* Generated Excuse */}
              {selectedExcuse && (
                <div className="mt-8 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg p-6 border border-indigo-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">Your Perfect Excuse</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={copyExcuse}
                        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {/* Share functionality */}}
                        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        title="Share excuse"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={generateExcuse}
                        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        title="Generate new excuse"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg italic leading-relaxed">
                    "{selectedExcuse}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Popular Excuses Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Popular Excuses</h3>
              <div className="space-y-4">
                {popularExcuses.map((excuse, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-indigo-400">
                    <p className="text-gray-300 text-sm italic mb-2">
                      "{excuse.excuse}"
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-indigo-400 font-semibold">
                        {excuse.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        ❤️ {excuse.votes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Pro Tips</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-2">
                  <Bug className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p>Always sound confident when delivering your excuse</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Bug className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p>Use technical jargon to confuse non-technical managers</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Bug className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p>Blame external factors whenever possible</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Bug className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p>Turn bugs into "undocumented features"</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Random Excuse</h3>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-gray-300 text-sm italic mb-2">
                  "The bug is actually a sophisticated load balancer that distributes errors across different user sessions for optimal performance."
                </p>
                <button
                  onClick={() => {/* Generate random excuse */}}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Generate New →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};