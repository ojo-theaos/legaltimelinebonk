import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Modal from './components/Modal';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import { FaDownload } from 'react-icons/fa';

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (selectedFile && formData.matchDate) {
      const newTimelineItem = {
        id: selectedFile.id,
        date: formData.matchDate,
        title: formData.documentName,
        description: formData.explainer,
        comments: formData.comments,
        type: selectedFile.type
      };

      setTimelineData(prevData => {
        const updatedData = prevData.filter(item => item.id !== newTimelineItem.id);
        return [...updatedData, newTimelineItem].sort((a, b) => new Date(a.date) - new Date(b.date));
      });
      setIsModalOpen(false);
      setFormData({ documentName: '', explainer: '', comments: '', matchDate: '' });
    } else {
      console.error('Cannot save: Missing file or date');
    }
  };

  const handleClearTimeline = () => {
    if (window.confirm('Are you sure you want to save the timeline?')) {
      setTimelineData([]);
      alert('Timeline saved, thanks!');
    }
  };

  const handleExportTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color') || '#f0f0f0';
      htmlToImage.toPng(timelineElement, { backgroundColor })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'timeline.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error exporting timeline:', error);
        });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100" style={{ '--bg-color': '#f0f0f0' }}>
      <Sidebar onFileSelect={handleFileSelect} />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Investigation Timeline</h1>
          <div className="flex items-center">
            <button 
              onClick={handleClearTimeline}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150 mr-2"
            >
              Save Timeline
            </button>
            <button 
              onClick={handleExportTimeline}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-150 flex items-center"
              title="Export as PNG"
            >
              <FaDownload />
            </button>
          </div>
        </div>
        {timelineData.length === 0 ? (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-500 text-lg" style={{ opacity: 0.7 }}>
              Please select your documents, either manually or via search, enter the necessary tags, date and apply it to your timeline.
            </p>
          </div>
        ) : (
          <div id="timeline" style={{ backgroundColor: '#f0f0f0' }}>
            <Timeline data={timelineData} />
          </div>
        )}
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
