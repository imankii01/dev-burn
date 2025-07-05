import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🔥</span>
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                DevBurn
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The AI-powered roast platform that helps developers grow through hilariously honest feedback. 
              Built by developers, for developers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Roasters */}
          <div>
            <h3 className="text-white font-semibold mb-4">Roasters</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Roaster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code Roaster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Project Roaster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Startup Roaster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio Roaster</a></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dev Scorecard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Excuse Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roast Certificates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Voice Roasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm">
            © 2024 DevBurn. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by</span>
            <a href="https://github.com/imankii01" className="text-orange-400 hover:text-orange-300 transition-colors">
              Ankit (@imankii01)
            </a>
            <span>•</span>
            <span>Powered by</span>
            <span className="text-orange-400 font-semibold">SnapStay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};