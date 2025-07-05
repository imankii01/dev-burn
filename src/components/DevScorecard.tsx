import React from 'react';
import { Trophy, Star, TrendingUp, Award, Users, Code, Lightbulb, Globe } from 'lucide-react';

export const DevScorecard: React.FC = () => {
  const overallScore = 7.2;
  const level = "Senior Developer";
  const rank = "Top 15%";

  const scores = [
    { category: "Resume Quality", score: 8.5, icon: "📄", color: "from-blue-400 to-purple-600" },
    { category: "Code Quality", score: 6.8, icon: "💻", color: "from-red-400 to-pink-600" },
    { category: "Project Innovation", score: 7.2, icon: "🚀", color: "from-green-400 to-blue-600" },
    { category: "Portfolio Design", score: 8.1, icon: "🎨", color: "from-purple-400 to-pink-600" },
    { category: "Startup Viability", score: 5.9, icon: "💡", color: "from-yellow-400 to-orange-600" },
    { category: "Technical Skills", score: 7.8, icon: "⚡", color: "from-indigo-400 to-purple-600" }
  ];

  const badges = [
    { name: "Code Ninja", description: "Clean code structure", icon: "🥷", earned: true },
    { name: "Design Guru", description: "Excellent portfolio design", icon: "🎨", earned: true },
    { name: "Resume Pro", description: "Professional resume", icon: "📄", earned: true },
    { name: "Bug Slayer", description: "Minimal code issues", icon: "🐛", earned: false },
    { name: "Innovation Master", description: "Creative project ideas", icon: "💡", earned: false },
    { name: "Full Stack Hero", description: "Complete skillset", icon: "🦸", earned: true },
    { name: "Performance Beast", description: "Optimized applications", icon: "⚡", earned: false },
    { name: "Documentation King", description: "Excellent README files", icon: "📚", earned: false },
    { name: "Test Overlord", description: "Comprehensive testing", icon: "🧪", earned: false },
    { name: "Deployment Wizard", description: "Professional deployment", icon: "🚀", earned: true }
  ];

  const recentActivity = [
    { action: "Resume roasted", score: 8.5, date: "2 hours ago", change: "+0.3" },
    { action: "Code analyzed", score: 6.8, date: "1 day ago", change: "-0.2" },
    { action: "Portfolio reviewed", score: 8.1, date: "3 days ago", change: "+0.5" },
    { action: "Startup idea pitched", score: 5.9, date: "1 week ago", change: "-0.1" }
  ];

  const levelProgress = {
    current: "Senior Developer",
    next: "Tech Lead",
    progress: 72,
    requirements: [
      "Score 8.0+ in Code Quality",
      "Earn 8+ badges",
      "Complete 10+ roasts",
      "Maintain 85%+ consistency"
    ]
  };

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", score: 9.2, badge: "🏆" },
    { rank: 2, name: "Mike Rodriguez", score: 8.9, badge: "🥈" },
    { rank: 3, name: "Alex Kim", score: 8.7, badge: "🥉" },
    { rank: 4, name: "You", score: 7.2, badge: "🔸" },
    { rank: 5, name: "Jordan Taylor", score: 7.1, badge: "🔸" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Developer Scorecard</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Track your progress across all DevBurn roasters. Level up your skills and unlock achievements.
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8">
          <div className="text-center mb-8">
            <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-4">
              {overallScore}
            </div>
            <div className="text-2xl font-bold text-white mb-2">{level}</div>
            <div className="text-gray-400 mb-4">Global Rank: {rank}</div>
            
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24</div>
                <div className="text-gray-400">Total Roasts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-gray-400">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">92</div>
                <div className="text-gray-400">Days Active</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scores & Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Scores */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Category Scores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scores.map((score, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{score.icon}</span>
                        <h3 className="text-lg font-bold text-white">
                          {score.category}
                        </h3>
                      </div>
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${score.color}`}>
                        {score.score}
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${score.color}`}
                        style={{ width: `${(score.score / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">{activity.action}</div>
                        <div className="text-gray-400 text-sm">{activity.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-white font-bold">{activity.score}</div>
                      <div className={`text-sm px-2 py-1 rounded ${
                        activity.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {activity.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level Progress */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Level Progress</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-white">{levelProgress.current}</div>
                <div className="text-lg font-semibold text-gray-400">→ {levelProgress.next}</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                <div 
                  className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"
                  style={{ width: `${levelProgress.progress}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-400 mb-4">{levelProgress.progress}% to next level</div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Requirements for {levelProgress.next}:</h4>
                {levelProgress.requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Badges</h3>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge, index) => (
                  <div key={index} className={`p-3 rounded-lg border text-center ${
                    badge.earned 
                      ? 'bg-yellow-500/20 border-yellow-400/30' 
                      : 'bg-gray-800/50 border-gray-600 opacity-50'
                  }`}>
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <div className="text-xs font-semibold text-white">{badge.name}</div>
                    <div className="text-xs text-gray-400">{badge.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Leaderboard</h3>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    user.name === 'You' ? 'bg-orange-500/20 border border-orange-400/30' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{user.badge}</span>
                      <div>
                        <div className={`font-semibold ${
                          user.name === 'You' ? 'text-orange-400' : 'text-white'
                        }`}>{user.name}</div>
                        <div className="text-xs text-gray-400">#{user.rank}</div>
                      </div>
                    </div>
                    <div className="text-white font-bold">{user.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  <Code className="w-5 h-5 inline mr-2" />
                  Roast New Code
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                  <Lightbulb className="w-5 h-5 inline mr-2" />
                  Submit Startup Idea
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  <Globe className="w-5 h-5 inline mr-2" />
                  Analyze Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};