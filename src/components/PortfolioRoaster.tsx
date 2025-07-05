import React, { useState } from 'react';
import { Globe, Zap, Clock, Smartphone, Monitor, Palette } from 'lucide-react';

export const PortfolioRoaster: React.FC = () => {
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roastResult, setRoastResult] = useState<any>(null);

  const analyzePortfolio = async () => {
    if (!portfolioUrl.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRoastResult({
        siteName: "johndoe.dev",
        overallScore: 6.8,
        roastQuote: "This portfolio is cleaner than your commit history, but that's not saying much. At least visitors won't flee in terror.",
        metrics: {
          loadTime: 3.2,
          mobileScore: 85,
          designScore: 78,
          contentScore: 65,
          seoScore: 72
        },
        analysis: [
          {
            category: "First Impressions",
            score: 8,
            feedback: "Clean, modern design that doesn't assault the eyes. Someone actually cares about user experience here.",
            icon: "👀",
            details: ["Professional color scheme", "Good typography choices", "Clear navigation structure"]
          },
          {
            category: "Loading Speed",
            score: 5,
            feedback: "3.2 seconds to load? Are you serving images the size of Texas? Users have the attention span of goldfish.",
            icon: "⚡",
            details: ["Large unoptimized images", "No lazy loading", "Too many HTTP requests"]
          },
          {
            category: "Mobile Experience",
            score: 8,
            feedback: "Actually responsive! Your hamburger menu works and doesn't hide behind other elements. Shocking!",
            icon: "📱",
            details: ["Good touch targets", "Readable text on mobile", "Proper viewport handling"]
          },
          {
            category: "Content Quality",
            score: 6,
            feedback: "Your 'About' section is longer than a CVS receipt, but at least you have substance. Quality over quantity next time.",
            icon: "📝",
            details: ["Too much text", "Good project descriptions", "Missing call-to-actions"]
          },
          {
            category: "Technical Skills",
            score: 7,
            feedback: "You can code AND design? Impressive. Your projects show actual thought, not just tutorial follow-alongs.",
            icon: "⚙️",
            details: ["Diverse tech stack", "Real-world projects", "Clean code examples"]
          }
        ],
        improvements: [
          "Optimize images - they're loading like it's 1999",
          "Add loading animations to make wait times feel shorter",
          "Implement lazy loading for below-the-fold content",
          "Add more white space for better readability",
          "Include testimonials or recommendations",
          "Add a clear call-to-action on every page"
        ],
        designElements: [
          {
            element: "Color Palette",
            rating: "Good",
            comment: "Professional blues and grays. Safe but effective."
          },
          {
            element: "Typography",
            rating: "Excellent",
            comment: "Great font pairing. Readable and modern."
          },
          {
            element: "Layout",
            rating: "Good",
            comment: "Clean grid system, could use more visual hierarchy."
          },
          {
            element: "Animations",
            rating: "Needs Work",
            comment: "Static as a museum. Add some life to it!"
          }
        ],
        competitorComparison: [
          "Better than 68% of developer portfolios",
          "Loading speed below average for modern sites",
          "Design quality above average",
          "Content depth better than most"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const samplePortfolios = [
    {
      name: "sarah-dev.com",
      description: "Full-stack developer with killer animations",
      score: 9.2,
      highlight: "Lightning fast, gorgeous design"
    },
    {
      name: "mikecodes.io",
      description: "React specialist with clean minimalist design",
      score: 8.1,
      highlight: "Perfect mobile experience"
    },
    {
      name: "alexdesigns.net",
      description: "UI/UX designer turned developer",
      score: 7.5,
      highlight: "Beautiful but slow loading"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio Roaster</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Submit your portfolio URL and let our AI judge your design, performance, and content. 
            We'll roast everything from your loading times to your color choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Submit Your Portfolio</h2>
              
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Portfolio/Website URL
                </label>
                <input
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://yourportfolio.com"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
                <p className="text-sm text-gray-400 mt-2">
                  We'll analyze your site's design, performance, mobile experience, and content quality.
                </p>
              </div>

              {/* What We Check */}
              <div className="mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-600">
                <h3 className="font-semibold text-white mb-3">What We Analyze:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Loading Speed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                    <span>Mobile Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-4 h-4 text-purple-400" />
                    <span>Design Quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-purple-400" />
                    <span>User Experience</span>
                  </div>
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzePortfolio}
                disabled={!portfolioUrl.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Analyzing Portfolio...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Roast My Portfolio</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sample Portfolios Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Top Rated Portfolios</h3>
              <div className="space-y-4">
                {samplePortfolios.map((portfolio, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-white mb-1">{portfolio.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{portfolio.description}</p>
                    <p className="text-purple-400 text-xs mb-2">{portfolio.highlight}</p>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-bold text-purple-400">{portfolio.score}/10</span>
                      <span className="text-xs text-gray-400">Overall Score</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Tips</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>• First impressions matter - make it count</p>
                <p>• Optimize images for faster loading</p>
                <p>• Test on mobile devices</p>
                <p>• Keep content scannable</p>
                <p>• Include clear contact information</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {roastResult && (
          <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{roastResult.siteName}</h2>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {roastResult.overallScore}/10
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-lg p-6 border border-purple-400/30">
                <p className="text-lg italic text-gray-300">
                  "{roastResult.roastQuote}"
                </p>
              </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  {roastResult.metrics.loadTime}s
                </div>
                <div className="text-gray-300 text-sm">Load Time</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {roastResult.metrics.mobileScore}
                </div>
                <div className="text-gray-300 text-sm">Mobile Score</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {roastResult.metrics.designScore}
                </div>
                <div className="text-gray-300 text-sm">Design Score</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {roastResult.metrics.contentScore}
                </div>
                <div className="text-gray-300 text-sm">Content Score</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">
                  {roastResult.metrics.seoScore}
                </div>
                <div className="text-gray-300 text-sm">SEO Score</div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {roastResult.analysis.map((item: any, index: number) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-lg font-bold text-white">
                        {item.category}
                      </h3>
                    </div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {item.score}/10
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    {item.feedback}
                  </p>
                  <div className="space-y-1">
                    {item.details.map((detail: string, i: number) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        <span className="text-xs text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Design Elements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Design Elements Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roastResult.designElements.map((element: any, index: number) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{element.element}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        element.rating === 'Excellent' ? 'bg-green-500 text-white' :
                        element.rating === 'Good' ? 'bg-blue-500 text-white' :
                        'bg-orange-500 text-white'
                      }`}>
                        {element.rating}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{element.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Improvement Suggestions</h3>
              <div className="space-y-3">
                {roastResult.improvements.map((improvement: string, index: number) => (
                  <div key={index} className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{improvement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitor Comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">How You Stack Up</h3>
              <div className="space-y-3">
                {roastResult.competitorComparison.map((comparison: string, index: number) => (
                  <div key={index} className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{comparison}</p>
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