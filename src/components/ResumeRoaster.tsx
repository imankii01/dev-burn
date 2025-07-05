import React, { useState } from 'react';
import { Upload, FileText, Zap, Download, Share2, Star } from 'lucide-react';

export const ResumeRoaster: React.FC = () => {
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roastResult, setRoastResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you'd parse the PDF here
      setResumeText('Sample resume content loaded from PDF...');
    }
  };

  const analyzeResume = async () => {
    if (!resumeText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRoastResult({
        overallScore: 6.5,
        roastQuote: "This resume has more buzzwords than a Silicon Valley startup pitch deck. 'Synergistic blockchain solutions'? Really?",
        improvements: [
          {
            category: "Buzzword Overload",
            score: 4,
            feedback: "You've turned your resume into buzzword bingo. Replace 'leverage synergies' with actual accomplishments.",
            suggestions: ["Use specific metrics", "Replace jargon with clear language", "Focus on results, not processes"]
          },
          {
            category: "Missing Keywords",
            score: 7,
            feedback: "Good technical skills mentioned, but missing some industry-relevant keywords.",
            suggestions: ["Add 'React', 'Node.js', 'AWS'", "Include relevant certifications", "Mention agile methodologies"]
          },
          {
            category: "Content Structure",
            score: 8,
            feedback: "Well-structured overall, but could use better bullet points.",
            suggestions: ["Use action verbs", "Quantify achievements", "Keep bullets concise"]
          }
        ],
        badges: ["Buzzword Bingo Champion", "Format Guru", "Skills Showcase"]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const mockRoasts = [
    {
      quote: "This resume screams 'I know Figma' but whispers 'I might know how to code'",
      author: "Sarah Chen, Frontend Dev",
      score: 7.2
    },
    {
      quote: "Five years of experience in React, but your GitHub shows three todo apps",
      author: "Mike Rodriguez, Full Stack",
      score: 6.8
    },
    {
      quote: "Your resume is more polished than your actual code commits",
      author: "Alex Kim, DevOps",
      score: 8.1
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Resume Roaster</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Upload your resume and let our AI find every buzzword, missed opportunity, and formatting sin. 
            We'll roast it so you can improve it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Upload Your Resume</h2>
              
              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Upload PDF Resume
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">
                    Drag and drop your resume PDF here, or click to browse
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Choose File
                  </label>
                </div>
              </div>

              {/* Or Text Input */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-4 font-semibold">
                  Or Paste Resume Text
                </label>
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume content here..."
                  className="w-full h-64 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Analyze Button */}
              <button
                onClick={analyzeResume}
                disabled={!resumeText.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 animate-spin" />
                    <span>Analyzing Resume...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Roast My Resume</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Sample Roasts Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Recent Roasts</h3>
              <div className="space-y-4">
                {mockRoasts.map((roast, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-400">
                    <p className="text-gray-300 text-sm italic mb-2">
                      "{roast.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {roast.author}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">
                          {roast.score}
                        </span>
                      </div>
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
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                {roastResult.overallScore}/10
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Resume Roast Results</h2>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg p-6 border border-blue-400/30">
                <p className="text-lg italic text-gray-300">
                  "{roastResult.roastQuote}"
                </p>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {roastResult.improvements.map((improvement: any, index: number) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">
                      {improvement.category}
                    </h3>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                      {improvement.score}/10
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    {improvement.feedback}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-400">Suggestions:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {improvement.suggestions.map((suggestion: string, i: number) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Badges Earned</h3>
              <div className="flex flex-wrap gap-3">
                {roastResult.badges.map((badge: string, index: number) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    🏆 {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                <Download className="w-5 h-5" />
                <span>Download Report</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share Roast</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};