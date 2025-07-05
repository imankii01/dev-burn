import React, { useState } from 'react';
import { Github, Link, Zap, Star, GitBranch, AlertCircle } from 'lucide-react';

export const ProjectRoaster: React.FC = () => {
  const [projectInput, setProjectInput] = useState('');
  const [inputType, setInputType] = useState<'github' | 'description'>('github');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roastResult, setRoastResult] = useState<any>(null);

  const analyzeProject = async () => {
    if (!projectInput.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRoastResult({
        projectName: "TodoMaster Pro",
        overallScore: 5.5,
        roastQuote: "Another todo app? How refreshingly original! At least you added a dark mode, so you're not completely hopeless.",
        tags: ["🚀 MVP", "🧪 Experimental", "💡 Educational"],
        analysis: [
          {
            category: "README Quality",
            score: 3,
            feedback: "Your README is shorter than a TikTok video. Add setup instructions, screenshots, and maybe explain what your project actually does.",
            icon: "📖"
          },
          {
            category: "Tech Stack",
            score: 7,
            feedback: "React + TypeScript + Tailwind is solid, but everyone and their dog uses this stack. Show some originality!",
            icon: "⚡"
          },
          {
            category: "Code Quality",
            score: 6,
            feedback: "Clean code structure, but your component names read like a drunk person named them. 'SuperAwesomeButton'? Really?",
            icon: "🔧"
          },
          {
            category: "Innovation",
            score: 4,
            feedback: "It's a todo app. The world has enough todo apps. Unless yours can do my laundry, try something new.",
            icon: "💡"
          },
          {
            category: "UI/UX",
            score: 8,
            feedback: "Actually looks decent! Clean design, good color scheme. Your designer friend helped, didn't they?",
            icon: "🎨"
          }
        ],
        improvements: [
          "Add unit tests (your future self will thank you)",
          "Write a proper README with screenshots",
          "Add error handling for API calls",
          "Consider adding animations for better UX",
          "Maybe build something that doesn't exist yet?"
        ],
        funFacts: [
          "You have 47 commits, 46 of which are 'fix typo'",
          "Your largest file is 400 lines. Time to refactor!",
          "3 TODO comments in your code. Ironic.",
          "You use 'any' type 12 times. TypeScript is crying."
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const sampleProjects = [
    {
      name: "TaskFlow Dashboard",
      description: "A productivity dashboard with real-time analytics",
      score: 8.2,
      roast: "Finally, a dashboard that doesn't look like it was designed in 2005!"
    },
    {
      name: "ChatBot Builder",
      description: "AI-powered chatbot creation platform",
      score: 7.8,
      roast: "Building chatbots to build chatbots. We've gone full inception."
    },
    {
      name: "Recipe Finder",
      description: "Find recipes based on ingredients you have",
      score: 6.5,
      roast: "Great! Now I can finally use that expired yogurt creatively."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <Github className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Project Roaster</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Submit your GitHub repo or project description and let our AI judge your creation. 
            We'll roast everything from your README to your tech stack choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Submit Your Project</h2>
              
              {/* Input Type Toggle */}
              <div className="flex bg-gray-800/50 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setInputType('github')}
                  className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                    inputType === 'github'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Github className="w-5 h-5 inline mr-2" />
                  GitHub Repo
                </button>
                <button
                  onClick={() => setInputType('description')}
                  className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                    inputType === 'description'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Link className="w-5 h-5 inline mr-2" />
                  Description
                </button>
              </div>

              {/* Input Field */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  {inputType === 'github' ? 'GitHub Repository URL' : 'Project Description'}
                </label>
                {inputType === 'github' ? (
                  <input
                    type="url"
                    value={projectInput}
                    onChange={(e) => setProjectInput(e.target.value)}
                    placeholder="https://github.com/username/project-name"
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  />
                ) : (
                  <textarea
                    value={projectInput}
                    onChange={(e) => setProjectInput(e.target.value)}
                    placeholder="Describe your project: what it does, what technologies you used, what problems it solves..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  />
                )}
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzeProject}
                disabled={!projectInput.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Analyzing Project...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Roast My Project</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sample Projects Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Recently Roasted</h3>
              <div className="space-y-4">
                {sampleProjects.map((project, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-white mb-1">{project.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                    <p className="text-gray-300 text-xs italic mb-2">
                      "{project.roast}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">
                          {project.score}
                        </span>
                      </div>
                      <span className="text-xs text-green-400">
                        🚀 Featured
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {roastResult && (
          <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{roastResult.projectName}</h2>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                  {roastResult.overallScore}/10
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                {roastResult.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gradient-to-r from-green-500/20 to-blue-600/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-lg p-6 border border-green-400/30">
                <p className="text-lg italic text-gray-300">
                  "{roastResult.roastQuote}"
                </p>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {roastResult.analysis.map((item: any, index: number) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-lg font-bold text-white">
                        {item.category}
                      </h3>
                    </div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                      {item.score}/10
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>

            {/* Improvements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-orange-400" />
                Suggested Improvements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.improvements.map((improvement: string, index: number) => (
                  <div key={index} className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      {improvement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <GitBranch className="w-6 h-6 mr-2 text-purple-400" />
                Fun Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.funFacts.map((fact: string, index: number) => (
                  <div key={index} className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};