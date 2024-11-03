import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative bg-black aspect-video">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold mb-2">Sample Lecture Video</h3>
          <p className="text-gray-400">Video player will be integrated here</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;