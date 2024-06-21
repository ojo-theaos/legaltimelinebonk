// components/Timeline.js
import React from 'react';

function Timeline({ data }) {
  return (
    <div className="relative">
      {data.map((item, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
            {index + 1}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">{item.documentName}</h3>
            <p className="text-gray-600">{item.documentMatchDate}</p>
            <p>{item.documentExplainer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}