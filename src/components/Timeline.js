// components/Timeline.js
import React, { useState } from 'react';

function Timeline({ data }) {
  const [zoomLevel, setZoomLevel] = useState(100); // 100% is the default zoom level
  const years = [...new Set(data.map(item => new Date(item.date).getFullYear()))].sort();

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 10, 200)); // Max zoom: 200%
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 10, 50)); // Min zoom: 50%
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button onClick={handleZoomOut} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">-</button>
        <button onClick={handleZoomIn} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
      </div>
      <div className="relative" style={{ fontSize: `${zoomLevel}%` }}>
        {years.map(year => (
          <div key={year} className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{year}</h2>
            <div className="border-l-4 border-blue-500 ml-3">
              {data
                .filter(item => new Date(item.date).getFullYear() === year)
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((item, index) => (
                  <div key={item.id} className="mb-12 flex items-start">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <div className="flex-1 ml-6">
                      <div className="relative bg-white p-4 rounded-lg shadow-md border border-gray-200">
                        {/* Triangle for speech bubble effect */}
                        <div className="absolute top-4 -left-4 w-0 h-0 
                                        border-t-8 border-r-8 border-b-8 
                                        border-transparent border-r-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-black mt-1">
                          {item.title}
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                        {item.comments && (
                          <p className="text-sm italic text-gray-600">
                            Comments: {item.comments}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;