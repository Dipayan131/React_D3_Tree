import React, { useState } from 'react';
import TreeComponent from './TreeComponent';
import jsonData from './_data/db.json'; // Ensure this path is correct

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>OSINT FRAMEWORK</h1>
      <div className='box'>
        {selectedItem ? (
          <div>
            <h2>Details</h2>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
            <p><strong>URL:</strong> <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">{selectedItem.url}</a></p>
          </div>
        ) : (
          <p>Click on a node to see details</p>
        )}
      </div>
      <TreeComponent data={jsonData} onItemClick={handleItemClick} />
    </div>
  );
};

export default App;
