import React, { useState } from 'react';
import { BookOpen, Share2, Download } from 'lucide-react';

const NotesPanel: React.FC = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">AI-Generated Notes</h2>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-full p-4 text-gray-700 border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="AI will generate notes here as the lecture progresses..."
        />
      </div>
    </div>
  );
};

export default NotesPanel;