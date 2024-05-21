// App.js
import React from 'react';
import TreeComponent from './TreeComponent';
import jsonData from './_data/db.json'; // Ensure this path is correct

const App = () => (
  <div>
    <h1>OSINT Framework</h1>
    <TreeComponent data={jsonData} />
  </div>
);

export default App;
