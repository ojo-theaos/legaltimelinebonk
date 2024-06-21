// components/Modal.js
import React from 'react';

function Modal({ isOpen, onClose, file, formData, setFormData, onSave }) {
  if (!isOpen || !file) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{file.name}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Document Explainer</label>
          <textarea 
            name="explainer"
            value={formData.explainer}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" 
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Document Comments</label>
          <textarea 
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" 
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Document Match Date</label>
          <input 
            type="date" 
            name="matchDate"
            value={formData.matchDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" 
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Close
          </button>
          <button onClick={onSave} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;