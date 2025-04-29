import React, { useState } from "react";
import jsonData from "./data.json";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = [];
    const searchRecursive = (obj) => {
      if (typeof obj === "object") {
        for (let key in obj) {
          if (typeof obj[key] === "object") {
            searchRecursive(obj[key]);
          }
          if (
            typeof obj[key] !== "object" &&
            String(obj[key]).toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            filteredResults.push({ key, value: obj[key] });
          }
        }
      }
    };
    searchRecursive(jsonData);
    setResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search JSON Data"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item) => (
          <li key={`${item.key}-${item.value}`}>
            {item.key}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

