// components/Sidebar.js
import React from 'react';

const mockFiles = [
  { id: 1, name: 'Document 1' },
  { id: 2, name: 'Document 2' },
  // Add more mock files
];

function Sidebar({ onFileSelect }) {
  return (
    <aside className="w-64 bg-white p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Documents</h2>
      <ul>
        {mockFiles.map((file) => (
          <li
            key={file.id}
            className="cursor-pointer hover:bg-gray-100 p-2"
            onClick={() => onFileSelect(file)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}