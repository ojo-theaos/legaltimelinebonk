// components/Sidebar.js
import React from 'react';

// You can replace these with actual icons from a library like react-icons
const icons = {
  pdf: "📄",
  doc: "📝",
  image: "🖼️",
  spreadsheet: "📊",
  default: "📁"
};

const mockFiles = [
  { id: 1, name: 'Annual Report 2023', type: 'pdf', overview: 'Financial summary for the year 2023' },
  { id: 2, name: 'Meeting Minutes', type: 'doc', overview: 'Notes from board meeting on Jan 15' },
  { id: 3, name: 'Q4 Sales Data', type: 'spreadsheet', overview: 'Sales figures for Q4 2023' },
  { id: 4, name: 'Product Launch Plan', type: 'pdf', overview: 'Strategy for new product launch' },
];

function Sidebar({ onFileSelect }) {
  return (
    <aside className="w-80 bg-white p-6 shadow-md overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Documents</h2>
      <div className="space-y-4">
        {mockFiles.map((file) => (
          <div
            key={file.id}
            className="cursor-pointer bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition duration-300"
            onClick={() => onFileSelect(file)}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{icons[file.type] || icons.default}</span>
              <h3 className="text-lg font-semibold truncate">{file.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{file.type.toUpperCase()}</p>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{file.overview}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;