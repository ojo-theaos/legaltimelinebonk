// components/Modal.js
import React, { useState } from 'react';

function Modal({ file, onSave, onClose }) {
  const [formData, setFormData] = useState({
    documentName: file.name,
    documentExplainer: '',
    documentComments: '',
    documentMatchDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Document Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Add input fields for document details */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="ml-2 bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}