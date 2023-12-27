import React from "react";

const Search = () => {
  const [searchText, updateSearchText] = useState("");
  return (
    <div className="filter">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            updateSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurants = totalRestaurants.filter((res) => {
              return res.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredData(filteredRestaurants);
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
