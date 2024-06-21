// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Modal from './components/Modal';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [timelineData, setTimelineData] = useState([]);

  // Mock function to update timeline
  const updateTimeline = (fileData) => {
    setTimelineData([...timelineData, fileData]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onFileSelect={setSelectedFile} />
      <main className="flex-1 p-6">
        <Timeline data={timelineData} />
      </main>
      {selectedFile && (
        <Modal
          file={selectedFile}
          onSave={(data) => {
            updateTimeline(data);
            setSelectedFile(null);
          }}
          onClose={() => setSelectedFile(null)}
        />
      )}
    </div>
  );
}

export default App;