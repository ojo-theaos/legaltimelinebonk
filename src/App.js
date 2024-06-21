// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Modal from './components/Modal';

function App() {
  const [timelineData, setTimelineData] = useState([
    { id: 1, date: '2023-01-01', title: 'Event 1', description: 'Description 1' },
    { id: 2, date: '2023-02-01', title: 'Event 2', description: 'Description 2' },
  ]);
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    explainer: '',
    comments: '',
    matchDate: ''
  });

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setIsModalOpen(true);
    setFormData({ explainer: '', comments: '', matchDate: '' }); // Reset form data
    console.log('Selected file:', file);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Here you would typically send this data to your backend
    console.log('Saving:', { file: selectedFile, ...formData });
    
    // Add new event to timeline
    setTimelineData([...timelineData, { 
      id: Date.now(), 
      date: formData.matchDate, 
      title: selectedFile.name, 
      description: formData.explainer 
    }]);

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ explainer: '', comments: '', matchDate: '' });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onFileSelect={handleFileSelect} />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Document Timeline</h1>
        <Timeline data={timelineData} />
      </main>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        file={selectedFile}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;