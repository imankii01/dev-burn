import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ResumeRoaster } from './components/ResumeRoaster';
import { ProjectRoaster } from './components/ProjectRoaster';
import { CodeRoaster } from './components/CodeRoaster';
import { StartupRoaster } from './components/StartupRoaster';
import { PortfolioRoaster } from './components/PortfolioRoaster';
import { ExcuseGenerator } from './components/ExcuseGenerator';
import { Footer } from './components/Footer';

export type RoasterType = 'hero' | 'resume' | 'project' | 'code' | 'startup' | 'portfolio' |'excuse';

function App() {
  const [activeRoaster, setActiveRoaster] = useState<RoasterType>('hero');

  const renderActiveRoaster = () => {
    switch (activeRoaster) {
      case 'hero':
        return <Hero onSelectRoaster={setActiveRoaster} />;
      case 'resume':
        return <ResumeRoaster />;
      case 'project':
        return <ProjectRoaster />;
      case 'code':
        return <CodeRoaster />;
      case 'startup':
        return <StartupRoaster />;
      case 'portfolio':
        return <PortfolioRoaster />;
      case 'excuse':
        return <ExcuseGenerator />;
      default:
        return <Hero onSelectRoaster={setActiveRoaster} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <Navigation activeRoaster={activeRoaster} onSelectRoaster={setActiveRoaster} />
        
        <main className="relative z-10">
          {renderActiveRoaster()}
        </main>
        
        {activeRoaster === 'hero' && <Footer />}
      </div>
    </div>
  );
}

export default App;