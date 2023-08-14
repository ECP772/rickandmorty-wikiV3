import React from "react";
import "./styles.css";
const Search = ({ setpageNumber, setsearch }) => {
  return (
    <form className="d-flex justify-content-center gap-4 m-5">
      <input
        type="text"
        onChange={(e) => {
          setsearch(e.target.value);
          setpageNumber(1);
        }}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="btn btn-primary fs-5"
      >
        search
      </button>
    </form>
  );
};

export default Search;
