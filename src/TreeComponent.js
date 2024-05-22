import React, { useEffect, useState, useRef } from "react";
import { Tree } from "react-d3-tree";
import { convertToTree } from "./convertToTree";
import searchJSON from "./popSearch"; // Corrected import

const TreeComponent = ({ data, onItemClick }) => {
  const [treeData, setTreeData] = useState(null);
  const treeRef = useRef(null);
  const containerRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const convertedData = convertToTree(data);
    setTreeData(convertedData);
  }, [data]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleClick = (item) => {
    const result = searchJSON(item);
    const message = {
      name: result[0].Name,
      description: result[0].Description,
      url: result[0].URL,
    };
    onItemClick(message);
  };

  const toggleFavorite = (itemName) => {
    const updatedFavorites = favorites.includes(itemName)
      ? favorites.filter((name) => name !== itemName)
      : [...favorites, itemName];
    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const isLeaf = !nodeDatum.children || nodeDatum.children.length === 0;
    const isFavorite = favorites.includes(nodeDatum.name);

    return (
      <g>
        <circle
          r={15}
          fill={isFavorite ? "red" : "green"}
          onClick={toggleNode}
        ></circle>
        <text fill="black" strokeWidth="1" x="20" y="5">
          {nodeDatum.name}
        </text>
        
          <foreignObject x="20" y="20" width="200" height="30">
          {isLeaf && (
            <button
              onClick={() => handleClick(nodeDatum.name)}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                backgroundColor: "#FF4500", // OrangeRed
                color: "#fff", // White text color
                border: "1px solid #FF6347", // Tomato border
                borderRadius: "25px", // Fully rounded corners
                cursor: "pointer",
                outline: "none",
                verticalAlign: "middle",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                height: "30px",
                fontWeight: "bold",
                marginRight: "10px", // Add margin to separate buttons
              }}
            >
              Details
            </button>
            )}
            <button
              onClick={() => toggleFavorite(nodeDatum.name)}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                backgroundColor: isFavorite ? "red" : "green", // Red for favorite, Green for non-favorite
                color: "#fff", // White text color
                border: "1px solid #FF6347", // Tomato border
                borderRadius: "25px", // Fully rounded corners
                cursor: "pointer",
                outline: "none",
                verticalAlign: "middle",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                height: "30px",
                fontWeight: "bold",
              }}
            >
              {isFavorite ? "Unfavorite" : "Favorite"}
            </button>
          </foreignObject>
        
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
      <div ref={containerRef} style={{ width: "100%", height: "88vh" }}>
        {treeData && (
          <Tree
            data={treeData}
            orientation="vertical"
            ref={treeRef}
            translate={translate}
            zoom={0.85} // Adjust the zoom level as needed
            renderCustomNodeElement={renderCustomNode}
            enableLegacyTransitions
            shouldCollapseNeighborNodes
            separation={{ siblings: 1.6 }}
          />
        )}
      </div>
    </div>
  );
};

export default TreeComponent;
