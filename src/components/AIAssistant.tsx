import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">24/7 AI Study Assistant</h2>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-indigo-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-gray-800">Hello! I'm your AI study assistant. How can I help you today?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Ask anything about the lecture..."
          />
          <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;