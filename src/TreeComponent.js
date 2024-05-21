import React, { useEffect, useState, useRef } from 'react';
import { Tree } from 'react-d3-tree';
import { convertToTree } from './convertToTree';
import searchJSON from './popSearch';  // Corrected import

const TreeComponent = ({ data }) => {
  const [treeData, setTreeData] = useState(null);
  const treeRef = useRef(null);
  const containerRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const convertedData = convertToTree(data);
    setTreeData(convertedData);
  }, [data]); // Added dependency to run useEffect when data changes

  const handleClick = (item) => {
    const result = searchJSON(item);
    let message ="Name: " + result[0].Name + "\n";
    message += "Description: " + result[0].Description + "\n";
    message += "URL: " + result[0].URL;
    alert(message);
  };



  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const isLeaf = !nodeDatum.children || nodeDatum.children.length === 0;

    return (
      <g>
        <circle r={15} fill="green" onClick={toggleNode}></circle>
        <text fill="black" strokeWidth="1" x="20" y="5">
          {nodeDatum.name}
        </text>
        {isLeaf && (
          <foreignObject x="20" y="20" width="100" height="30">
            <button
    onClick={() => handleClick(nodeDatum.name)}
    style={{
        padding: '8px 16px',
        fontSize: '14px',
        backgroundColor: '#87CEFA', // Light sky blue
        color: '#000', // Black text color
        border: '1px solid #000', // Black border
        borderRadius: '25px', // Fully rounded corners
        cursor: 'pointer',
        outline: 'none',
        verticalAlign: 'middle',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        height:'30px'
    }}
    onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#b0e0e6'; // Light steel blue on hover
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Slightly larger shadow on hover
    }}
    onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#87CEFA'; // Revert to original background color
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'; // Revert to original shadow
    }}
>
    Details
</button>

          </foreignObject>
        )}
      </g>
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      const dimensions = containerRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: 50, // Adjust this value to control the vertical positioning
      });
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
        {treeData && (
          <Tree
            data={treeData}
            orientation="vertical"
            ref={treeRef}
            translate={translate}
            zoom={0.8} // Adjust the zoom level as needed
            renderCustomNodeElement={renderCustomNode}
            enableLegacyTransitions
            shouldCollapseNeighborNodes
            separation={{siblings:1.8}}
          />
        )}
      </div>
    </div>
  );
};

export default TreeComponent;
