import React from 'react';
import { BookOpen, Brain, Code, Focus, LineChart, MessageSquare, Video } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'notes', icon: BookOpen, label: 'Smart Notes' },
    { id: 'assistant', icon: MessageSquare, label: 'AI Assistant' },
    { id: 'summaries', icon: Video, label: 'Video Summaries' },
    { id: 'code', icon: Code, label: 'Code Editor' },
    { id: 'focus', icon: Focus, label: 'Focus Mode' },
    { id: 'insights', icon: LineChart, label: 'Insights' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-900">EduAI Pro</h1>
        </div>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === item.id
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;