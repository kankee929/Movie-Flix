import React from "react";

export const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        value={props.searchValue}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
        className="form-control"
        placeholder="Type to search"
      />
    </div>
  );
};
