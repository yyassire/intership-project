import { Search } from "@mui/icons-material";
import { useState } from "react";
import "./navbar.scss";

function Navbar({ searchedData }) {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchedData(result);
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <div className="Navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          News<span>App</span>
        </div>
        <form onSubmit={handleSubmit} className="search-bar">
          <Search />
          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="text"
            placeholder="Type your topic of interest"
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
