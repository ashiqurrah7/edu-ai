import React from 'react';
import { Focus, Bell } from 'lucide-react';

interface FocusModeProps {
  active: boolean;
  onToggle: () => void;
}

const FocusMode: React.FC<FocusModeProps> = ({ active, onToggle }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Focus className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Focus Mode</h2>
        </div>
        <button
          onClick={onToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            active ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              active ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">Current Session</h3>
            <Bell className="h-5 w-5 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">25:00</p>
          <p className="text-sm text-gray-600 mt-1">Focus Period</p>
        </div>

        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Focus Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Daily Goal</span>
              <span className="text-sm font-medium text-gray-900">4 hours</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;