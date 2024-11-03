import React from 'react';
import { LineChart, Clock, Target } from 'lucide-react';

const ProductivityInsights: React.FC = () => {
  return (
    <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-6">
        <LineChart className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Productivity Insights</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Focus Time Today</h3>
          </div>
          <p className="text-2xl font-bold text-indigo-600">2.5 hrs</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Productivity Score</h3>
          </div>
          <p className="text-2xl font-bold text-indigo-600">85%</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Peak Focus Hours</h3>
        <div className="h-40 flex items-end space-x-2">
          {[20, 45, 75, 60, 80, 65, 30].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-indigo-600 rounded-t opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

export default ProductivityInsights;