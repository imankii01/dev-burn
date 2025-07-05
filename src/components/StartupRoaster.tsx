import React, { useState } from 'react';
import { Lightbulb, DollarSign, Target, TrendingUp, Users, Zap } from 'lucide-react';

export const StartupRoaster: React.FC = () => {
  const [startupIdea, setStartupIdea] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roastResult, setRoastResult] = useState<any>(null);

  const analyzeStartup = async () => {
    if (!startupIdea.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRoastResult({
        ideaName: "UberForX",
        overallScore: 3.5,
        investorPersona: "Sarcastic VC Guru",
        roastQuote: "So... it's like Uber, but for renting spoons? Bold of you to assume people can't buy their own cutlery. What's next, Airbnb for napkins?",
        vcVerdict: "PASS (Hard Pass)",
        analysis: [
          {
            category: "Problem-Solution Fit",
            score: 2,
            feedback: "The problem you're solving is about as urgent as deciding between regular or premium air. People have been managing without spoon rentals for millennia.",
            icon: "🎯"
          },
          {
            category: "Market Size",
            score: 4,
            feedback: "Sure, everyone uses spoons, but do they need to rent them? Your TAM calculation seems to confuse 'people who eat' with 'people who rent eating utensils'.",
            icon: "📊"
          },
          {
            category: "Business Model",
            score: 5,
            feedback: "Commission on spoon rentals? At least you've thought about monetization, even if it's for the most unnecessary service since pre-sliced bread.",
            icon: "💰"
          },
          {
            category: "Competitive Advantage",
            score: 3,
            feedback: "Your moat is as deep as a puddle. What's stopping someone from just... buying spoons? Or literally any store from adding rental services?",
            icon: "🏰"
          },
          {
            category: "Go-to-Market Strategy",
            score: 4,
            feedback: "Marketing to 'people who eat' is not a strategy. That's like saying your target market is 'humans who breathe'.",
            icon: "🚀"
          }
        ],
        redFlags: [
          "Solution looking for a problem",
          "Extremely low barrier to entry",
          "No clear differentiation from existing solutions",
          "Overestimated market demand",
          "Underestimated operational complexity"
        ],
        suggestions: [
          "Find a real problem that keeps people up at night",
          "Research if people actually want this solution",
          "Define a specific, addressable market segment",
          "Identify what makes your solution 10x better",
          "Create a realistic financial model"
        ],
        investorQuotes: [
          "I've seen 1000 pitches this year. This might be #1001 in terms of necessity.",
          "You're not disrupting anything except common sense.",
          "The only thing this would disrupt is my sleep if I invested in it.",
          "Are you sure this isn't a late April Fool's joke?"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const sampleIdeas = [
    {
      name: "TaskFlow AI",
      description: "AI-powered productivity assistant that learns your workflow",
      score: 8.5,
      verdict: "INTERESTED"
    },
    {
      name: "CodeMentor Live",
      description: "Real-time code review and mentorship platform",
      score: 7.2,
      verdict: "MAYBE"
    },
    {
      name: "PetTok",
      description: "TikTok but exclusively for pets",
      score: 4.1,
      verdict: "PASS"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Startup Idea Roaster</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Present your startup idea to our brutally honest AI investor. 
            Get feedback on everything from product-market fit to your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Present Your Idea</h2>
              
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Startup Idea Description
                </label>
                <textarea
                  value={startupIdea}
                  onChange={(e) => setStartupIdea(e.target.value)}
                  placeholder="Describe your startup idea: What problem does it solve? Who are your customers? What's your business model? How will you make money?"
                  className="w-full h-48 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Be specific about the problem, solution, target market, and business model.
                </p>
              </div>

              {/* Example Questions */}
              <div className="mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-600">
                <h3 className="font-semibold text-white mb-3">Consider these questions:</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• What specific problem are you solving?</p>
                  <p>• Who is your target customer?</p>
                  <p>• How will you make money?</p>
                  <p>• What's your competitive advantage?</p>
                  <p>• How big is the market opportunity?</p>
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzeStartup}
                disabled={!startupIdea.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Analyzing Idea...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Pitch to Investor</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sample Ideas Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Recent Pitches</h3>
              <div className="space-y-4">
                {sampleIdeas.map((idea, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-white mb-1">{idea.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{idea.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-yellow-400">{idea.score}/10</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        idea.verdict === 'INTERESTED' ? 'bg-green-500 text-white' :
                        idea.verdict === 'MAYBE' ? 'bg-yellow-500 text-black' :
                        'bg-red-500 text-white'
                      }`}>
                        {idea.verdict}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Investor Mindset</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>• Is this a vitamin or a painkiller?</p>
                <p>• How big is the market opportunity?</p>
                <p>• What's the path to $100M ARR?</p>
                <p>• Can this be defended?</p>
                <p>• Do customers desperately need this?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {roastResult && (
          <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{roastResult.ideaName}</h2>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  {roastResult.overallScore}/10
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-gray-400">Reviewed by:</span>
                <span className="text-orange-400 font-semibold">{roastResult.investorPersona}</span>
                <span className={`px-4 py-2 rounded-full font-bold ${
                  roastResult.vcVerdict.includes('PASS') ? 'bg-red-500 text-white' :
                  roastResult.vcVerdict.includes('MAYBE') ? 'bg-yellow-500 text-black' :
                  'bg-green-500 text-white'
                }`}>
                  {roastResult.vcVerdict}
                </span>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-lg p-6 border border-yellow-400/30">
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
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                      {item.score}/10
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>

            {/* Red Flags */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-red-400" />
                Red Flags
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.redFlags.map((flag: string, index: number) => (
                  <div key={index} className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      {flag}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                Path to Improvement
              </h3>
              <div className="space-y-3">
                {roastResult.suggestions.map((suggestion: string, index: number) => (
                  <div key={index} className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Quotes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-purple-400" />
                What Other Investors Are Saying
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.investorQuotes.map((quote: string, index: number) => (
                  <div key={index} className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm italic">
                      "{quote}"
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