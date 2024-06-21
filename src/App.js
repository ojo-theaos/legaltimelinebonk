// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Modal from './components/Modal';

function App() {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    documentName: '',
    explainer: '',
    comments: '',
    matchDate: ''
  });

const handleFileSelect = (file) => {
  setSelectedFile(file);
  setIsModalOpen(true);
  setFormData({ 
    documentName: file.name,
    explainer: file.overview,
    comments: '',
    matchDate: ''
  });
};

const handleSave = () => {
  if (selectedFile && formData.matchDate) {
    const newTimelineItem = {
      id: Date.now(),
      date: formData.matchDate,
      title: formData.documentName, // Use the potentially edited name
      description: formData.explainer,
      comments: formData.comments,
      type: selectedFile.type
    };

    setTimelineData(prevData => [...prevData, newTimelineItem].sort((a, b) => new Date(a.date) - new Date(b.date)));
    setIsModalOpen(false);
    setFormData({ documentName: '', explainer: '', comments: '', matchDate: '' });
  } else {
    console.error('Cannot save: Missing file or date');
  }
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onFileSelect={handleFileSelect} />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Investigation Timeline</h1>
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