import React, { useState } from "react";
import TreeComponent from "./TreeComponent";
import jsonData from "./_data/db.json";
import "./App.css";
import searchJSON from "./popSearch";
import { FaTwitter, FaGithub } from "react-icons/fa";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //function to set node details
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  //function to search for node details
  const handleSearch = () => {
    const foundItem = searchJSON(searchTerm);
    if (foundItem.length > 0) {
      const message = {
        name: foundItem[0].Name,
        description: foundItem[0].Description,
        url: foundItem[0].URL,
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
            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Description:</strong> {selectedItem.description}
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a
                href={selectedItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedItem.url}
              </a>
            </p>
          </div>
        ) : (
          <p>Click on a Details button to see the details</p>
        )}
      </div>
      <div className="info">
        <p>
          (T) - Indicates a link to a tool that must be installed and run
          locally
        </p>
        <p>(D) - Google Dork, for more information: Google Hacking</p>
        <p>(R) - Requires registration</p>
        <p>
          (M) - Indicates a URL that contains the search term and the URL itself
          must be edited manually
        </p>
      </div>
      <TreeComponent data={jsonData} onItemClick={handleItemClick} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>
          <strong>Search</strong>
        </button>
      </div>
      <div className="osint-info">
        <h2>Notes</h2>
        <p>
          OSINT framework focused on gathering information from free tools or
          resources. The intention is to help people find free OSINT resources.
          Some of the sites included might require registration or offer more
          data for $$$, but you should be able to get at least a portion of the
          available information for no cost.
        </p>
        <p>
          I originally created this framework with an information security point
          of view. Since then, the response from other fields and disciplines
          has been incredible. I would love to be able to include any other
          OSINT resources, especially from fields outside of infosec. Please let
          me know about anything that might be missing!
        </p>
      </div>
      <footer>
        <div className="footer-content">
          <p>For Update Notifications</p>
          <ul>
            <li>
              <a href="https://twitter.com/jnordine">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/lockfale/osint-framework">
                <FaGithub />
              </a>
            </li>
          </ul>
          <p>Suggestions, Comments, Feedback</p>
          <p>
            Feedback or new tool suggestions are extremely welcome! Please feel
            free to reach out on Twitter or submit an issue on Github.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
