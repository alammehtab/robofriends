import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type="search"
      placeholder="search robots here"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={searchChange}
    ></input>
  );
};

export default SearchBox;
