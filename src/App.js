// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';

function App() {
  const [timelineData, setTimelineData] = useState([
    { id: 1, date: '2023-01-01', title: 'Event 1', description: 'Description 1' },
    { id: 2, date: '2023-02-01', title: 'Event 2', description: 'Description 2' },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    // You can add more logic here, like opening a modal or updating the timeline
    console.log('Selected file:', file);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onFileSelect={handleFileSelect} />
      <main className="flex-1 p-6">
        <Timeline data={timelineData} />
        {selectedFile && (
          <div className="mt-4 p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Selected File: {selectedFile.name}</h2>
            {/* Add more details or components related to the selected file */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;