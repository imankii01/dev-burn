import React, { useState } from 'react';
import { Code, Zap, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const CodeRoaster: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roastResult, setRoastResult] = useState<any>(null);

  const analyzeCode = async () => {
    if (!code.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRoastResult({
        overallScore: 4.5,
        roastQuote: "You really wrote 300 lines of nested if-else statements? That's not code, that's a labyrinth. Even the Minotaur would get lost in there.",
        codeSmells: [
          {
            type: "Nested Hell",
            severity: "high",
            count: 12,
            description: "Your indentation levels go deeper than philosophical discussions about JavaScript closures.",
            line: 45
          },
          {
            type: "Magic Numbers",
            severity: "medium",
            count: 8,
            description: "What does 42 mean in your code? Is it the answer to life, universe, and everything?",
            line: 23
          },
          {
            type: "Variable Naming",
            severity: "high",
            count: 15,
            description: "Variables named 'x', 'data', and 'temp' make your code as readable as hieroglyphics.",
            line: 12
          },
          {
            type: "Long Functions",
            severity: "medium",
            count: 3,
            description: "Your function is longer than the terms and conditions nobody reads.",
            line: 67
          }
        ],
        goodPractices: [
          {
            type: "Proper Comments",
            description: "At least you commented your code. Gold star for effort!"
          },
          {
            type: "Consistent Formatting",
            description: "Your indentation is consistent. Your code formatter is the real MVP."
          },
          {
            type: "Error Handling",
            description: "You actually handle errors instead of letting them crash and burn. Impressive!"
          }
        ],
        suggestions: [
          "Extract those nested if-else statements into separate functions",
          "Replace magic numbers with named constants",
          "Use descriptive variable names that explain what they store",
          "Break down large functions into smaller, focused ones",
          "Consider using a linter to catch these issues early"
        ],
        complexity: {
          cyclomatic: 23,
          cognitive: 31,
          maintainability: 42
        }
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const sampleCode = `function processUserData(data) {
  if (data) {
    if (data.users) {
      if (data.users.length > 0) {
        for (let i = 0; i < data.users.length; i++) {
          if (data.users[i].active) {
            if (data.users[i].age > 18) {
              // Process adult user
              console.log('Processing adult user');
            } else {
              // Process minor user
              console.log('Processing minor user');
            }
          }
        }
      }
    }
  }
}`;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Code Roaster</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Paste your code and let our AI judge your programming skills. 
            We'll roast your logic, naming conventions, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Submit Your Code</h2>
              
              {/* Language Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Programming Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                  <option value="react">React JSX</option>
                </select>
              </div>

              {/* Code Input */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Your Code
                </label>
                <div className="relative">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Paste your code here..."
                    className="w-full h-96 bg-gray-900 border border-gray-600 rounded-lg p-4 text-green-400 placeholder-gray-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 resize-none font-mono text-sm"
                  />
                  <button
                    onClick={() => setCode(sampleCode)}
                    className="absolute top-2 right-2 text-xs text-gray-400 hover:text-white bg-gray-800 px-2 py-1 rounded transition-colors"
                  >
                    Load Sample
                  </button>
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzeCode}
                disabled={!code.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Analyzing Code...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Roast My Code</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Common Code Smells</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Deep Nesting</h4>
                    <p className="text-gray-400 text-xs">
                      Too many nested if-else statements make code hard to read
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Magic Numbers</h4>
                    <p className="text-gray-400 text-xs">
                      Unexplained numbers scattered throughout your code
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Poor Naming</h4>
                    <p className="text-gray-400 text-xs">
                      Variables named "x", "data", or "temp" tell us nothing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Tips</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>• Use descriptive variable names</p>
                <p>• Keep functions short and focused</p>
                <p>• Avoid deep nesting</p>
                <p>• Comment complex logic</p>
                <p>• Handle errors gracefully</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {roastResult && (
          <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-2">
                {roastResult.overallScore}/10
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Code Roast Results</h2>
              <div className="bg-gradient-to-r from-red-500/20 to-pink-600/20 rounded-lg p-6 border border-red-400/30">
                <p className="text-lg italic text-gray-300">
                  "{roastResult.roastQuote}"
                </p>
              </div>
            </div>

            {/* Code Smells */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-red-400" />
                Code Smells Found
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.codeSmells.map((smell: any, index: number) => (
                  <div key={index} className={`rounded-lg p-4 border ${
                    smell.severity === 'high' ? 'bg-red-500/10 border-red-400/30' :
                    smell.severity === 'medium' ? 'bg-orange-500/10 border-orange-400/30' :
                    'bg-yellow-500/10 border-yellow-400/30'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{smell.type}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        smell.severity === 'high' ? 'bg-red-500 text-white' :
                        smell.severity === 'medium' ? 'bg-orange-500 text-white' :
                        'bg-yellow-500 text-black'
                      }`}>
                        {smell.severity}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{smell.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Found: {smell.count} times</span>
                      <span className="text-gray-400">Line: {smell.line}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Good Practices */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                Good Practices Found
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roastResult.goodPractices.map((practice: any, index: number) => (
                  <div key={index} className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{practice.type}</h4>
                    <p className="text-gray-300 text-sm">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity Metrics */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Complexity Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    {roastResult.complexity.cyclomatic}
                  </div>
                  <div className="text-gray-300 text-sm">Cyclomatic Complexity</div>
                  <div className="text-xs text-gray-400">Should be &lt; 10</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">
                    {roastResult.complexity.cognitive}
                  </div>
                  <div className="text-gray-300 text-sm">Cognitive Complexity</div>
                  <div className="text-xs text-gray-400">Should be &lt; 15</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {roastResult.complexity.maintainability}
                  </div>
                  <div className="text-gray-300 text-sm">Maintainability Index</div>
                  <div className="text-xs text-gray-400">Should be &gt; 70</div>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Suggestions for Improvement</h3>
              <div className="space-y-3">
                {roastResult.suggestions.map((suggestion: string, index: number) => (
                  <div key={index} className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{suggestion}</p>
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