import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="h-[120px] flex items-center justify-center">
      <div className="styled-search-container border border-red-600 opacity-50 flex justify-between rounded-md px-3 py-4 w-3/5 hover:border-[2px]">
        <input type="text" className="outline-none rounded px-2 w-full " placeholder="Search Comics..."/>
        <SearchIcon className="text-red-600" />
      </div>
    </div>
  );
}

export default Search;
