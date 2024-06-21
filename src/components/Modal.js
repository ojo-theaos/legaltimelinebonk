// components/Modal.js
import React from 'react';

const icons = {
  pdf: "📄",
  doc: "📝",
  image: "🖼️",
  spreadsheet: "📊",
  default: "📁"
};

function Modal({ isOpen, onClose, file, formData, setFormData, onSave }) {
  if (!isOpen || !file) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.matchDate) {
      alert('Please select a date before saving.');
      return;
    }
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{icons[file.type] || icons.default}</span>
            <input
              type="text"
              name="documentName"
              value={formData.documentName || file.name}
              onChange={handleChange}
              className="text-xl font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
            />
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Explainer</label>
            <textarea 
              name="explainer"
              value={formData.explainer}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" 
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Comments</label>
            <textarea 
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" 
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Match Date</label>
            <input 
              type="date" 
              name="matchDate"
              value={formData.matchDate}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
        </div>
        <div className="bg-gray-100 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition duration-150">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;