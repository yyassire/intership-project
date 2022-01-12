import { useState } from "react";
import "./customSearch.scss";

function CustomSearch({ filteredData }) {
  const [filtered, setFiltered] = useState("");
  return (
    <div className="CustomSearch">
      <div className="custom-search-wrapper">
        <h3 className="header">Custom Search</h3>
        <div className="filter-container">
          <label>News Type</label>
          <select onChange={(e) => setFiltered(e.target.value)}>
            <option value="default" disabled hidden>
              Select a type
            </option>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
            <option value="health">health</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
          </select>
          <div className="searchBtn">
            <button onClick={() => filteredData(filtered)}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSearch;
