// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';

import './index.css';  // or './App.css' depending on your file name

function App() {
  const [timelineData, setTimelineData] = useState([
    { id: 1, date: '2023-01-01', title: 'Event 1', description: 'Description 1' },
    { id: 2, date: '2023-02-01', title: 'Event 2', description: 'Description 2' },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Timeline data={timelineData} />
      </main>
    </div>
  );
}

export default App;