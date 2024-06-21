import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// You can replace these with actual icons from a library like react-icons
const icons = {
  pdf: "📄",
  doc: "📝",
  image: "🖼️",
  spreadsheet: "📊",
  default: "📁"
};

const mockFiles = [
  { id: uuidv4(), name: 'Annual Report 2023', type: 'pdf', overview: 'Financial summary for the year 2023' },
  { id: uuidv4(), name: 'Meeting Minutes', type: 'doc', overview: 'Notes from board meeting on Jan 15' },
  { id: uuidv4(), name: 'Q4 Sales Data', type: 'spreadsheet', overview: 'Sales figures for Q4 2023' },
  { id: uuidv4(), name: 'Product Launch Plan', type: 'pdf', overview: 'Strategy for new product launch' },
  { id: uuidv4(), name: 'Employee Handbook', type: 'doc', overview: 'Guidelines and policies for employees' },
  { id: uuidv4(), name: 'Project Timeline', type: 'spreadsheet', overview: 'Gantt chart for project milestones' },
  { id: uuidv4(), name: 'Budget Forecast', type: 'pdf', overview: 'Financial forecast for the next quarter' },
  { id: uuidv4(), name: 'Team Photo', type: 'image', overview: 'Group photo of the team' },
  { id: uuidv4(), name: 'Client Contract', type: 'pdf', overview: 'Agreement with new client' },
  { id: uuidv4(), name: 'Marketing Plan', type: 'doc', overview: 'Strategy for marketing campaigns' },
  { id: uuidv4(), name: 'Expense Report', type: 'spreadsheet', overview: 'Detailed expense report for 2023' },
  { id: uuidv4(), name: 'Product Photos', type: 'image', overview: 'Images of new products' },
  { id: uuidv4(), name: 'HR Policies', type: 'doc', overview: 'Human resources policies and procedures' },
  { id: uuidv4(), name: 'Sales Presentation', type: 'pdf', overview: 'Presentation for sales meeting' },
];

function Sidebar({ onFileSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState("new-timeline");

  const filteredFiles = mockFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (e) => {
    setSelectedPage(e.target.value);
    // Handle the page change logic here
  };

  return (
    <aside className="w-80 bg-white p-6 shadow-md overflow-y-auto">
      <div className="mb-4">
        <select
          value={selectedPage}
          onChange={handlePageChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-transparent"
        >
          <option value="new-timeline">New Timeline</option>
          <option value="your-timelines">Your Timelines</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-transparent"
        />
      </div>
      <div className="space-y-4">
        {filteredFiles.map((file) => (
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
