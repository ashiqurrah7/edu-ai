import React, { useState } from 'react';
import { BookOpen, Brain, Code, Focus, LineChart, MessageSquare, Video } from 'lucide-react';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import NotesPanel from './components/NotesPanel';
import AIAssistant from './components/AIAssistant';
import ProductivityInsights from './components/ProductivityInsights';
import CodeEditor from './components/CodeEditor';
import FocusMode from './components/FocusMode';

function App() {
  const [activeTab, setActiveTab] = useState('notes');
  const [isFocusMode, setIsFocusMode] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full flex">
          {/* Video Player Section */}
          <div className="w-2/3 h-full flex flex-col">
            <VideoPlayer />
            
            <div className="flex-1 p-4">
              {activeTab === 'notes' && <NotesPanel />}
              {activeTab === 'assistant' && <AIAssistant />}
              {activeTab === 'code' && <CodeEditor />}
              {activeTab === 'insights' && <ProductivityInsights />}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-1/3 border-l border-gray-200 bg-white p-4 overflow-y-auto">
            <FocusMode active={isFocusMode} onToggle={() => setIsFocusMode(!isFocusMode)} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;