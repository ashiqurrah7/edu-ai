import React, { useState } from 'react';
import { Code, Play } from 'lucide-react';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Online Code Editor</h2>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            <button className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700">
              <Play className="h-4 w-4" />
              <span>Run</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full font-mono text-sm p-4 bg-gray-50 text-gray-800 border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default CodeEditor;