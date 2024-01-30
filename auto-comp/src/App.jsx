import { useState } from "react";
import "./App.css";
import CountryData from "./resources/countryData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleSearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    const filteredCountries = CountryData.filter((country) =>
      country.name.toLowerCase().includes(lowerCaseSearch)
    );

    setFilteredResults(filteredCountries);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOptionsVisible(false);
    }
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          e.target.value ? setIsOptionsVisible(true) : setIsOptionsVisible(false);
        }}
        onInput={handleSearch}
        onKeyDown={handleKeyDown}
        id="customInputId"
        className="customInputClass"
      />
      <button className="customButtonClass">Search</button>
      {isOptionsVisible && (
        <div className="customOptionsContainer">
          {filteredResults.map((country) => (
            <div key={country.customId}>{country.name}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
