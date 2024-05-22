import React, { useState } from 'react';
import TreeComponent from './TreeComponent';
import jsonData from './_data/db.json'; // Ensure this path is correct
import './App.css'; // Import the CSS file
import searchJSON from './popSearch';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSearch = () => {
    const foundItem = searchJSON(searchTerm);
    if (foundItem.length > 0) {
      const message = {
        name: foundItem[0].Name,
        description: foundItem[0].Description,
        url: foundItem[0].URL
      };
      setSelectedItem(message);
    } else {
      setSelectedItem(null);
    }
  };

  return (
    <div>
      <h1>OSINT FRAMEWORK</h1>
      <div className="box">
        {selectedItem ? (
          <div>
            <h2>Details</h2>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
            <p><strong>URL:</strong> <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">{selectedItem.url}</a></p>
          </div>
        ) : (
          <p>Click on a Details button to see the details</p>
        )}
      </div>
      <TreeComponent data={jsonData} onItemClick={handleItemClick} />
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}><strong>Search</strong></button>
      </div>
    </div>
  );
};

export default App;
